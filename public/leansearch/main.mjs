const changeLocationSearch = (query) => {
  const params = new URLSearchParams([["q", query]]);
  document.location.search = params.toString();
};

const apiEndpoint = new URL('/api/leansearch/', localStorage.getItem("apiEndpoint") ?? location.origin);

const post = (url, body) =>
  fetch(new URL(url, apiEndpoint), {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

const queryElem = document.getElementById("query");

const calcQueryElemHeight = () => {
  queryElem.style.height = "auto";
  queryElem.style.height = queryElem.scrollHeight + "px";
};

queryElem.addEventListener("input", calcQueryElemHeight);

queryElem.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && !event.shiftKey && !event.repeat) {
    document.getElementById("search").dispatchEvent(new Event("click"));
    event.preventDefault();
  }
});

const resultsElem = document.getElementById("results");

document.getElementById("clear").addEventListener("click", () => {
  queryElem.value = "";
  resultsElem.innerHTML = "";
  queryElem.focus();
});

const katexOptions = {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false },
    { left: '\\[', right: '\\]', display: true },
  ],
  throwOnError: true,
};

const getGlobalData = () => {
  return {
    "limit": localStorage.getItem("limit"),
  }
};

const queryData = new URLSearchParams(window.location.search.slice(1));
const toastElem = document.getElementById("toast");

const toast = (message) => {
  toastElem.textContent = message;
  toastElem.classList.add("show");
  setTimeout(() => {
    toastElem.classList.remove("show");
  }, 2900);
};

; (() => {
  if (queryData.has("q")) {
    const globalData = getGlobalData();

    const query = queryData.get("q");

    const moduleRegex = /\$m:(\S+)/;
    const moduleMatch = query.match(moduleRegex);
    const moduleFilter = moduleMatch ? moduleMatch[1] : null;

    const nameRegex = /\$n:(\S+)/;
    const nameMatch = query.match(nameRegex);
    const nameFilter = nameMatch ? nameMatch[1] : null;

    const count = parseInt(globalData.limit);

    document.getElementById("num-results").value = count;
    queryElem.value = query;
    queryElem.dispatchEvent(new Event("input"));

    post("search",{
      "query": [query],
      "num_results": count,
    }).then(async (response) => {
      if (response.ok) {
        const results = await response.json();

        for (const item of results[0]) {
          const result = item["result"];
          const moduleName = result.module_name.join(".");
          const name = result.name.join(".");
          if (moduleFilter && !moduleName.startsWith(moduleFilter))
            continue;
          if (nameFilter && !name.startsWith(nameFilter))
            continue;
          const clone = card.content.cloneNode(true);
          clone.querySelector(".formal-name").textContent = name;
          clone.querySelector(".kind").textContent = result.kind;
          clone.querySelector(".formal-statement").textContent = result.signature;
          clone.querySelector(".informal-name").textContent = result.informal_name;
          clone.querySelector(".informal-statement").innerHTML = marked.parse(result.informal_description);
          renderMathInElement(clone.querySelector(".informal-name"), katexOptions);
          renderMathInElement(clone.querySelector(".informal-statement"), katexOptions);
          clone.querySelector(".similar").href = `/?q=${result.informal_description}`;
          clone.querySelector(".doc-link").href = `https://leanprover-community.github.io/mathlib4_docs/find/?pattern=${name}#doc`;
          clone.querySelector(".doc-link-new").href = `/doc/${moduleName}.html#${name}`;

          bindCardAction(clone.querySelector(".action"), {
            formalName: result.name,
          });
          resultsElem.appendChild(clone);
        }
      } else {
        const err = await response.json();
        toast(err.error ?? "Server error");
      }
    });
  }
})();

const addSearchListener = () => {
  document.getElementById("search").addEventListener("click", () => {
    const query = document.getElementById("query").value;
    if (query === '') return;
    localStorage.setItem("limit", document.getElementById("num-results").value);
    changeLocationSearch(query);
  });
};

addSearchListener();

const typeText = (text, index) => {
  queryElem.value += text.slice(index, index + 1);
  if (index + 1 < text.length) {
    setTimeout(typeText, 5, text, index + 1);
  } else {
    queryElem.dispatchEvent(new Event("input"));
  }
}

const bindCardAction = (actionsElem, { formalName }) => {
  actionsElem.querySelectorAll(".feedback").forEach((elem, _, all) => {
    elem.addEventListener("click", (event) => {
      const t = event.currentTarget;
      let body = {
        "declaration": formalName,
        "action": t.dataset.action,
      };
      if (t.classList.contains("selected")) {
        body["cancel"] = true;
        post("feedback", body).then(() => {
          t.classList.remove("selected")
        });
      } else {
        post("feedback", body).then(() => {
          all.forEach((e) => e.classList.remove("selected"));
          t.classList.add("selected");
        });
      }
    });
  })
};
