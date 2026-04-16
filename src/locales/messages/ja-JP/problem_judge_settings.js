return {
  title: "ジャッジ設定",
  header: "ジャッジ設定",
  back_to_problem: "戻る",
  confirm_back_to_problem: "保存せず戻る",
  submit: "保存する",
  no_submit_permission: "権限がありません",
  submit_success: "保存に成功しました。",
  error: {
    NO_SUCH_PROBLEM: "問題が存在しません。",
    PERMISSION_DENIED: "権限がありません。",
    PROBLEM_HAS_SUBMISSION: "提出がある問題のタイプは切り替えられません。",
    INVALID_JUDGE_INFO: {
      INVALID_TIME_LIMIT_TASK: "時間制限が無効です。",
      TIME_LIMIT_TOO_LARGE_TASK: "時間制限 {3} ms が大きすぎます。管理者に連絡してください。",
      INVALID_TIME_LIMIT_SUBTASK: "サブタスク {1} の時間制限が無効です。",
      TIME_LIMIT_TOO_LARGE_SUBTASK:
        "サブタスク {1} の時間制限 {3} ms が大きすぎます。管理者に連絡してください。",
      INVALID_TIME_LIMIT_TESTCASE: "サブタスク {1} のテストケース {2} の時間制限が無効です。",
      TIME_LIMIT_TOO_LARGE_TESTCASE:
        "サブタスク {1} のテストケース {2} の時間制限 {3} ms が大きすぎます。管理者に連絡してください。",
      INVALID_MEMORY_LIMIT_TASK: "メモリ制限が無効です。",
      MEMORY_LIMIT_TOO_LARGE_TASK: "メモリ制限 {3} MiB が大きすぎます。管理者に連絡してください。",
      INVALID_MEMORY_LIMIT_SUBTASK: "サブタスク {1} のメモリ制限が無効です。",
      MEMORY_LIMIT_TOO_LARGE_SUBTASK:
        "サブタスク {1} のメモリ制限 {3} MiB が大きすぎます。管理者に連絡してください。",
      INVALID_MEMORY_LIMIT_TESTCASE: "サブタスク {1} のテストケース {2} のメモリ制限が無効です。",
      MEMORY_LIMIT_TOO_LARGE_TESTCASE:
        "サブタスク {1} のテストケース {2} のメモリ制限 {3} MiB が大きすぎます。管理者に連絡してください。",
      INVALID_FILEIO_FILENAME: "入力ファイル名または出力ファイル名 {1} が無効です。",
      NO_TESTCASES: "テストケースがありません。",
      SUBTASK_HAS_NO_TESTCASES: "サブタスク {1} にテストケースがありません。",
      INVALID_SCORING_TYPE: "不明なエラーです。",
      INVALID_POINTS_SUBTASK: "サブタスク {1} の配点比率 {2} が無効です。",
      INVALID_POINTS_TESTCASE: "サブタスク {1} のテストケース {2} の配点比率 {3} が無効です。",
      POINTS_SUM_UP_TO_LARGER_THAN_100_SUBTASKS:
        "全サブタスクの配点合計が {1} で、満点の 100 を超えています。",
      POINTS_SUM_UP_TO_LARGER_THAN_100_TESTCASES:
        "サブタスク {1} の全テストケースの配点合計が {2} で、満点の 100 を超えています。",
      INVALID_DEPENDENCY: "サブタスク {1} の依存サブタスク ID {2} が無効です。",
      NO_SUCH_INPUT_FILE: "サブタスク {1} のテストケース {2} が参照する入力ファイル {3} が存在しません。",
      NO_SUCH_OUTPUT_FILE: "サブタスク {1} のテストケース {2} が参照する出力ファイル {3} が存在しません。",
      INVALID_CHECKER_TYPE: "不明なエラーです。",
      INVALID_CHECKER_OPTIONS: "不明なエラーです。",
      INVALID_CHECKER_INTERFACE: "不明なエラーです。",
      INVALID_CHECKER_LANGUAGE: "不明なエラーです。",
      NO_SUCH_CHECKER_FILE: "チェッカーファイル {1} が存在しません。",
      INVALID_CHECKER_COMPILE_AND_RUN_OPTIONS: "不明なエラーです。",
      INVALID_TIME_LIMIT_CHECKER: "チェッカーの時間制限が無効です。",
      INVALID_MEMORY_LIMIT_CHECKER: "チェッカーのメモリ制限が無効です。",
      TIME_LIMIT_TOO_LARGE_CHECKER: "チェッカーの時間制限 {1} ms が大きすぎます。管理者に連絡してください。",
      TIME_MEMORY_TOO_LARGE_CHECKER:
        "チェッカーのメモリ制限 {1} MiB が大きすぎます。管理者に連絡してください。",
      INVALID_INTERACTOR: "不明なエラーです。",
      INVALID_INTERACTOR_INTERFACE: "不明なエラーです。",
      INVALID_INTERACTOR_SHARED_MEMORY_SIZE: "不明なエラーです。",
      INVALID_INTERACTOR_COMPILE_AND_RUN_OPTIONS: "不明なエラーです。",
      INVALID_INTERACTOR_LANGUAGE: "不明なエラーです。",
      NO_SUCH_INTERACTOR_FILE: "インタラクターファイル {1} が存在しません。",
      INVALID_TIME_LIMIT_INTERACTOR: "インタラクターの時間制限が無効です。",
      INVALID_MEMORY_LIMIT_INTERACTOR: "インタラクターのメモリ制限が無効です。",
      TIME_LIMIT_TOO_LARGE_INTERACTOR:
        "インタラクターの時間制限 {1} ms が大きすぎます。管理者に連絡してください。",
      MEMORY_LIMIT_TOO_LARGE_INTERACTOR:
        "インタラクターのメモリ制限 {1} MiB が大きすぎます。管理者に連絡してください。",
      INVALID_EXTRA_SOURCE_FILES: "不明なエラーです。",
      INVALID_EXTRA_SOURCE_FILES_LANGUAGE: "不明なエラーです。",
      INVALID_EXTRA_SOURCE_FILES_DST: "追加ソースファイル {3} の出力先ファイル名が無効です。",
      NO_SUCH_EXTRA_SOURCE_FILES_SRC: "追加ソースファイル {3} が存在しません。",
      CYCLICAL_SUBTASK_DEPENDENCY: "サブタスクの依存関係に循環があります。",
      TOO_MANY_TESTCASES: "テストケース数が多すぎます。管理者に連絡してください。"
    }
  },
  edit_raw: {
    edit_raw: "コードを編集する",
    parse_error: "YAMLパースに失敗しました",
    cancel: "キャンセル",
    confirm_cancel: "変更を破棄",
    ok: "保存"
  },
  problem_type: "問題のタイプ",
  switch_type: "スイッチする",
  submittable: "提出可能",
  confirm_switch_type: "タイプ切り替えを確認",
  switch_type_success: "問題タイプの切り替えに成功しました。",
  meta: {
    time_limit: "時間制限",
    memory_limit: "メモリ制限",
    input_file: "入力ファイル",
    output_file: "出力ファイル",
    use_standard_io: "標準入出力を使用する",
    run_samples: "サンプルをジャッジする"
  },
  checker: {
    checker: "チェッカー",
    types: {
      integers: "整数",
      floats: "浮動小数点数",
      lines: "行比較",
      binary: "バイナリ",
      custom: "カスタム"
    },
    config: {
      floats: {
        precision: "精度",
        description:
          "参加者の答えと正解との絶対誤差または相対誤差が {value} 未満の場合、正解とみなされます。"
      },
      lines: {
        case_sensitive: "大文字小文字を区別",
        description:
          "各行の末尾の空白文字とファイル末尾の空行は無視されます。"
      },
      custom: {
        interface: "インターフェース",
        interfaces: {
          testlib: "Testlib",
          legacy: "SYZOJ 2",
          lemon: "Lemon",
          hustoj: "HustOJ",
          qduoj: "QDUOJ",
          domjudge: "DOMjudge"
        },
        filename: "ファイル",
        filename_no_file: "ファイルなし"
      }
    }
  },
  interactor: {
    interactor: "インタラクター",
    interfaces: {
      stdio: "標準入出力",
      shm: "共有メモリ"
    },
    shm_size: "共有メモリサイズ",
    filename: "ファイル",
    filename_no_file: "ファイルなし"
  },
  subtasks: {
    auto_testcases:
      "テストデータファイルからテストケースを検出（<code>.in</code> と <code>.out</code> ファイルを自動的に一致）",
    auto_testcases_no_output: "テストデータファイルからテストケースを検出（<code>.in</code> ファイルを自動的に一致）",
    cannot_detect_testcases_from_testdata: "テストデータからテストケースを検出できません",
    subtask: "サブタスク",
    single_subtask: "シングルサブタスク",
    subtask_testcases_count: "{count}",
    subtask_type: {
      Sum: "各得点の合計",
      GroupMin: "各得点の最小",
      GroupMul: "各得点に百分率を掛ける"
    },
    subtask_options: {
      sort: "並べ替える",
      move_up: "上に移動",
      move_down: "下に移動",
      add_before: "前に追加",
      add_after: "後に追加",
      add_testcase: "テストケースを追加",
      delete: "削除",
      confirm_delete: "削除する"
    },
    auto_add_testcases: {
      auto_add_testcases: "自動でテストケースを追加",
      subtask: "サブタスク",
      help: "正規表現を使って入力ファイルと出力ファイルを選択し，リンクしてテストケースを追加します。",
      help_no_output:
        "ファイル名に一致する正規表現を入力してください。一致した各ファイルはテストケースの入力ファイルになります。",
      input_file: "入力ファイル",
      output_file: "出力ファイル",
      can_not_compile_for_input: "入力ファイルの正規表現はコンパイルできません：{message}",
      can_not_compile_for_output: "出力ファイルの正規表現はコンパイルできません：{message}",
      no_capturing_groups:
        "ファイルが選択されていません。正規表現を使って入力ファイルと出力ファイルをリンクしてください。",
      capturing_groups_do_not_match:
        "選択されたファイルの数が違います。入力が {countInInputFilename} 個で，出力が {countInOutputFilename} 個選択されています。",
      empty_regex: "正規表現を入力してください。",
      matches_count: "{count}　個見つかりました。",
      column_input_file: "入力ファイル",
      column_output_file: "出力ファイル",
      close: "閉じる",
      append: "テストケースを追加",
      replace: "サブタスクを変更",
      confirm_replace: "変更する"
    },
    expand_testcases: "テストケースを表示",
    hide_testcases: "テストケースを隠す",
    no_testcases: "テストケースはありません",
    testcase: {
      input_file: "入力ファイル",
      output_file: "出力ファイル",
      output_file_not_needed: "出力ファイルは不要です"
    },
    testcase_add: {
      before: "前に追加",
      after: "後に追加"
    },
    testcase_options: {
      move_up: "上に移動",
      move_down: "下に移動",
      delete: "削除",
      confirm_delete: "削除する"
    },
    dependencies: "このサブタスクに依存する"
  },
  file_selector: {
    no_matching_files: "一致するファイルがありません。",
    file_not_found_warning: "ファイルが見つかりません。"
  },
  extra_source_files: {
    option: "コンパイル時に追加ソースファイルを含める",
    title: "追加ソースファイル",
    src: "ソース",
    dst: "出力先",
    delete: "削除",
    confirm_delete: "削除を確認"
  }
};
