return {
  title: "問題",
  meta_labels: {
    non_public: "非表示",
    no_display_id: "IDなし"
  },
  fileio: {
    fileio: "ファイルIO",
    input: "入力ファイル",
    output: "出力ファイル"
  },
  axioms: {
    default: 'デフォルトの公理'
  },
  show_tags: "タグを表示",
  hide_tags: "タグを隠す",
  type: {
    Traditional: "Batch",
    Interaction: "インタラクティブ",
    SubmitAnswer: "解答提出",
    Lean: "Lean"
  },
  statistic: {
    submissions: "提出",
    accepted: "正解"
  },
  action: {
    submit: "提出",
    login_to_submit: "ログインして提出してください",
    submission: "提出一覧",
    statistics: "統計",
    discussion: "ディスカッション",
    files: "ファイル",
    edit: "編集",
    judge_settings: "ジャッジ設定",
    permission_manage: "権限管理",
    permission_manager_description: "問題 {idString}",
    set_display_id: "問題IDを設定",
    set_display_id_new: "新しいID（空または0で削除する）",
    set_display_id_submit: "設定",
    set_public: "公開",
    set_non_public: "非公開",
    set_public_confirm: "公開する",
    set_non_public_confirm: "非公開にする",
    delete: "削除",
    delete_confirm_title: "問題を削除",
    delete_confirm_content:
      "問題を削除してもよろしいですか？問題の提出、ディスカッション、ファイルもすべて削除されます。時間がかかる場合があります。",
    delete_confirm: "削除を確認",
    delete_cancel: "キャンセル",
    delete_success: "削除に成功しました。"
  },
  error: {
    PERMISSION_DENIED: "権限がありません。",
    NO_SUCH_PROBLEM: "問題が存在しません。",
    NO_DISPLAY_ID: "IDを設定してください。",
    INVALID_DISPLAY_ID: "IDは整数にしてください。",
    PUBLIC_PROBLEM_MUST_HAVE_DISPLAY_ID: "公開する問題にはIDを設定してください。",
    DUPLICATE_DISPLAY_ID: "ID {displayId} は使用されています。"
  },
  upload_error: "ファイルのアップロードに失敗しました: {error}",
  submit: {
    // This must be at most than full-width character characters e.g. "上次提交"
    last_submission: "前回提出",
    back_to_statement: "戻る",
    skip_samples: "サンプルをスキップする",
    upload_files: "ファイルをアップロード",
    choose_files: "ファイルを選択...",
    selected_archive: "アーカイブファイルを選択しました。",
    selected_valid_files: "{all} 個のファイルを選択しました。そのうち {valid} 個が有効です。",
    selected_files: "{all} 個のファイルを選択しました。",
    cancel_select_files: "選択をキャンセル",
    clear_editor_to_use_upload_left: "ファイルアップロードを使用するには、",
    clear_editor: "エディタの内容をクリア",
    clear_editor_to_use_upload_right: "してください。",
    fill_in_editor_or_upload_file: "エディタに解答を入力するか、ファイルをアップロードしてください。",
    module_name: "モジュールパス",
    module_name_example: "AplusB.Mainなど、ユーザー識別子なしで、「.」で区切る",
    const_name: "定理名",
    const_name_example: "定理を検索する …",
    lean_version: "Leanバージョン",
    no_addable_consts: "利用可能な定理がありません。",
    dependency_list: "(直接) 依存関係リスト",
    semver_mismatch: "このバージョンは問題のバージョン要件を満たしていません：{version}",
    submit: "提出"
  },
  permission_level: {
    read: "read",
    write: "write"
  },
  sample: {
    input: "入力",
    output: "出力",
    copy: "コピー",
    copied: "コピーに成功しました",
    failed_to_copy: "コピーに失敗しました"
  }
};
