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
          "gnu++03": "GNU C++ 03",
          "gnu++11": "GNU C++ 11",
          "gnu++14": "GNU C++ 14",
          "gnu++17": "GNU C++ 17",
          "gnu++20": "GNU C++ 20"
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
        name: "C 標準",
        values: {
          c89: "ISO C89",
          c99: "ISO C99",
          c11: "ISO C11",
          c17: "ISO C17",
          gnu89: "GNU C89",
          gnu99: "GNU C99",
          gnu11: "GNU C11",
          gnu17: "GNU C17"
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
        name: "バージョン",
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
        name: "バージョン",
        values: {
          2015: "2015",
          2018: "2018",
          2021: "2021"
        }
      },
      optimize: {
        name: "最適化",
        values: {
          0: "無効",
          1: "レベル 1",
          2: "レベル 2",
          3: "レベル 3 (最速)"
        }
      }
    }
  },
  swift: {
    name: "Swift",
    options: {
      version: {
        name: "バージョン",
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
        name: "バージョン",
        values: {
          98: "Haskell 98",
          2010: "Haskell 2010"
        }
      }
    }
  },
  csharp: {
    name: "C#",
    options: {
      version: {
        name: "バージョン",
        values: {
          7.3: "7.3",
          8: "8",
          9: "9"
        }
      }
    }
  },
  fsharp: {
    name: "F#"
  }
};
