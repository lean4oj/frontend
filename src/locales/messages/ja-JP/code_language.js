return {
  code_language: "言語",
  cpp: {
    name: "C++",
    options: {
      compiler: {
        name: "コンパイラ",
        values: {
          "g++": "G++",
          "clang++": "Clang++"
        }
      },
      std: {
        name: "C++ 標準",
        values: {
          "c++03": "ISO C++ 03",
          "c++11": "ISO C++ 11",
          "c++14": "ISO C++ 14",
          "c++17": "ISO C++ 17",
          "c++20": "ISO C++ 20",
          "c++23": "ISO C++ 23",
          "c++26": "ISO C++ 26",
          "gnu++03": "GNU C++ 03",
          "gnu++11": "GNU C++ 11",
          "gnu++14": "GNU C++ 14",
          "gnu++17": "GNU C++ 17",
          "gnu++20": "GNU C++ 20",
          "gnu++23": "GNU C++ 23",
          "gnu++26": "GNU C++ 26"
        }
      },
      O: {
        name: "最適化",
        values: {
          0: "-O0 (最適化無効)",
          1: "-O1",
          2: "-O2",
          3: "-O3",
          fast: "-Ofast (最速)"
        }
      },
      m: {
        name: "アーキテクチャ",
        values: {
          64: "64ビット",
          32: "32ビット",
          x32: "64ビット (32ビットポインタ)"
        }
      }
    }
  },
  c: {
    name: "C",
    options: {
      compiler: {
        name: "コンパイラ",
        values: {
          gcc: "GCC",
          clang: "Clang"
        }
      },
      std: {
        name: "C標準",
        values: {
          c89: "ISO C89",
          c99: "ISO C99",
          c11: "ISO C11",
          c17: "ISO C17",
          c23: "ISO C23",
          gnu89: "GNU C89",
          gnu99: "GNU C99",
          gnu11: "GNU C11",
          gnu17: "GNU C17",
          gnu23: "GNU C23"
        }
      },
      O: {
        name: "最適化",
        values: {
          0: "-O0 (最適化無効)",
          1: "-O1",
          2: "-O2",
          3: "-O3",
          fast: "-Ofast (最速)"
        }
      },
      m: {
        name: "アーキテクチャ",
        values: {
          64: "64ビット",
          32: "32ビット",
          x32: "64ビット (32ビットポインタ)"
        }
      }
    }
  },
  java: {
    name: "Java"
  },
  kotlin: {
    name: "Kotlin",
    options: {
      version: {
        name: "言語バージョン",
        values: {
          1.5: "1.5",
          1.6: "1.6",
          1.7: "1.7",
          1.8: "1.8",
          1.9: "1.9"
        }
      },
      platform: {
        name: "プラットフォーム",
        values: {
          jvm: "JVM"
        }
      }
    }
  },
  pascal: {
    name: "Pascal",
    options: {
      optimize: {
        name: "最適化",
        values: {
          "-": "無効",
          1: "-O",
          2: "-O2",
          3: "-O3",
          4: "-O4 (最速)"
        }
      }
    }
  },
  python: {
    name: "Python",
    options: {
      version: {
        name: "バージョン",
        values: {
          2.7: "2.7",
          3.9: "3.9",
          "3.10": "3.10"
        }
      }
    }
  },
  rust: {
    name: "Rust",
    options: {
      version: {
        name: "エディション",
        values: {
          2015: "2015",
          2018: "2018",
          2021: "2021",
          2024: "2024"
        }
      },
      optimize: {
        name: "最適化",
        values: {
          0: "無効",
          1: "レベル1",
          2: "レベル2",
          3: "レベル3 (最速)"
        }
      }
    }
  },
  swift: {
    name: "Swift",
    options: {
      version: {
        name: "言語バージョン",
        values: {
          4.2: "4.2",
          5: "5",
          6: "6"
        }
      },
      optimize: {
        name: "最適化",
        values: {
          Onone: "無効",
          O: "有効",
          Ounchecked: "有効 (安全性チェックなし)"
        }
      }
    }
  },
  go: {
    name: "Go",
    options: {
      version: {
        name: "バージョン",
        values: {
          "1.x": "1.x"
        }
      }
    }
  },
  haskell: {
    name: "Haskell",
    options: {
      version: {
        name: "言語エディション",
        values: {
          98: "Haskell 98",
          2010: "Haskell 2010",
          GHC2021: "GHC2021"
        }
      }
    }
  },
  csharp: {
    name: "C#",
    options: {
      version: {
        name: "言語バージョン",
        values: {
          7.3: "7.3",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13",
          14: "14"
        }
      }
    }
  },
  fsharp: {
    name: "F#"
  }
};
