export enum TaskId {

  MultiClickSameLinkThenGoBack = '001_01-Multi-Click-Same-Link-Then-Go-Back',
  GoForward = '001_02-Go-Forward',

  NotFoundPage = '002_01-Not-Found-Page',
  NotFoundPageGoBack = '002_02-Not-Found-Page-Go-Back',

  AuthorizationRequired = '003_01-Authorization-Required',
  AuthorizationRequiredGoBack = '003_02-Authorization-Required-Go-Back',
  ProtectedByAuthorization = '003_03-Protected-By-Authorization',
  LogOut = '003_04-Log-Out',
  UserInfoNotLoggedIn = '003_05-User-Info-Not-LoggedIn',
  UserInfoLoggedInAndLocked = '003_06-User-Info-LoggedIn-And-Locked',
  UserInfoLoggedInAndUnlocked = '003_07-User-Info-LoggedIn-And-Unlocked',

  CanDeactivateToIndex = '004_01-Can-Deactivate-To-Index',
  CanDeactivateCancelToFirst = '004_02-Can-Deactivate-Cancel-To-First',
  CanDeactivateYesToSecond = '004_03-Can-Deactivate-Yes-To-Second',

  External = '005_01-External',

  FirstPage = '006_01-First-Page',
  FirstNotFoundPage = '006_02-First-Not-Found-Page',
  CheckCustomTo = '006_03-Check-Custom-To',

  SecondPage = '007_01-Second-Page',
  SecondPicturePage = '007_02-Second-Picture-Page',

  CancelTransition = '008_01-Cancel-Transition',
  LongTimeGettingOfActionResult = '008_02-Long-Time-Getting-Of-Action-Result',

  PreventDuplicates = '009_01-Prevent-Duplicates',

}

export const TaskIds: TaskId[] = Object
  .values(TaskId)
// .filter(id => [ // ЕСЛИ требуется выполнить задачи выборочно
//   TaskId.CanDeactivateToIndex,
// ].includes(id))
