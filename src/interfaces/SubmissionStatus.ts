// Reordered for displaying in a select list
export enum SubmissionStatus {
  Pending = "Pending",

  Delivering = "Delivering",
  Delivered = "Delivered",
  JudgerReceived = "JudgerReceived",
  TypeChecking = "TypeChecking",
  AxiomChecking = "AxiomChecking",
  Replaying = "Replaying",

  InvalidImport = "InvalidImport",
  WrongAnswer = "WrongAnswer",
  Accepted = "Accepted",
  JudgementFailed = "JudgementFailed",
  Canceled = "Canceled",
}

export enum SubmissionStatusDisplay {
  Pending = "Pending",

  Delivering = "Delivering",
  Delivered = "Delivered",
  JudgerReceived = "Judger Received",
  TypeChecking = "Type Checking",
  AxiomChecking = "Axiom Checking",
  Replaying = "Replaying",

  InvalidImport = "Invalid Import",
  WrongAnswer = "Wrong Answer",
  Accepted = "Accepted",
  JudgementFailed = "Judgement Failed",
  Canceled = "Canceled",
}
