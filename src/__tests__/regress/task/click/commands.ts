import {Command, TCommand} from '@do-while-for-each/automation';
import {QaSel} from '../qa-selector';
import {TaskId} from '../task.id';

export function getCommands(id: TaskId): TCommand[] {
  const result = commands.get(id);
  if (!result)
    throw new Error(`No commands defined for "${id}"`);
  return result;
}

const {click, wait, fill} = Command;
const commands = new Map<TaskId, TCommand[]>([

  [TaskId.MultiClickSameLinkThenGoBack, [
    click({selector: QaSel.IndexPage_DoesntExist}),
    click({selector: QaSel.Header_Index}),
    click({selector: QaSel.Header_Index, options: {delay: 300}}),
    click({selector: QaSel.Header_Index, options: {delay: 300}}),
    click({selector: QaSel.Header_Index, options: {delay: 300}}),
    click({selector: QaSel.Header_Index, options: {delay: 300}}),
    click({selector: QaSel.Header_GoBack}),
  ]], // => not found page

  [TaskId.GoForward, [
    click({selector: QaSel.IndexPage_DoesntExist}),
    click({selector: QaSel.Header_GoBack}),
    click({selector: QaSel.Header_GoForward}),
  ]], // => not found page

  [TaskId.NotFoundPage, [
    click({selector: QaSel.IndexPage_DoesntExist})
  ]], // => not found page
  [TaskId.NotFoundPageGoBack, [
    click({selector: QaSel.IndexPage_DoesntExist}),
    click({selector: QaSel.Header_GoBack}),
  ]], // => index page

  [TaskId.AuthorizationRequired, [
    click({selector: QaSel.IndexPage_AuthorizationRequired})
  ]], // => login page
  [TaskId.AuthorizationRequiredGoBack, [
    click({selector: QaSel.IndexPage_AuthorizationRequired}),
    click({selector: QaSel.Header_GoBack}),
  ]], // => index page
  [TaskId.ProtectedByAuthorization, [
    click({selector: QaSel.IndexPage_AuthorizationRequired}),
    fill({selector: QaSel.LoginPage_Username, value: '1'}),
    fill({selector: QaSel.LoginPage_Password, value: '2'}),
    click({selector: QaSel.LoginPage_LogIn}),
  ]], // => protected by authorization page
  [TaskId.LogOut, [
    click({selector: QaSel.IndexPage_AuthorizationRequired}),
    click({selector: QaSel.LoginPage_LogOut}),
  ]], // => index page

  [TaskId.UserInfoNotLoggedIn, [
    click({selector: QaSel.IndexPage_UserInfo}),
  ]], // => login page
  [TaskId.UserInfoLoggedInAndLocked, [
    click({selector: QaSel.IndexPage_UserInfo}),
    fill({selector: QaSel.LoginPage_Username, value: '1'}),
    fill({selector: QaSel.LoginPage_Password, value: '2'}),
    click({selector: QaSel.LoginPage_LogIn}),
  ]], // => NeedToUnlockUserInfo page
  [TaskId.UserInfoLoggedInAndUnlocked, [
    click({selector: QaSel.IndexPage_AuthorizationRequired}),
    click({selector: QaSel.LoginPage_LogOut}),
    click({selector: QaSel.IndexPage_UserInfo}),
    fill({selector: QaSel.LoginPage_Username, value: '1'}),
    fill({selector: QaSel.LoginPage_Password, value: '2'}),
    click({selector: QaSel.LoginPage_LogIn}),
    click({selector: QaSel.NeedToUnlockUserInfo_AuthorizationRequired}),
    click({selector: QaSel.ProtectedByAuthorization_LockUnlockBtn}),
    click({selector: QaSel.Header_Index}),
    click({selector: QaSel.IndexPage_UserInfo}),
  ]], // => UserInfo page

  [TaskId.CanDeactivateToIndex, [
    click({selector: QaSel.IndexPage_CanDeactivate}),
    click({selector: QaSel.Header_Index}),
    wait(1_000),
  ]], // => dialog 'Yes' 'Cancel'
  [TaskId.CanDeactivateCancelToFirst, [
    click({selector: QaSel.IndexPage_CanDeactivate}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
  ]], // => can deactivate page
  [TaskId.CanDeactivateYesToSecond, [
    click({selector: QaSel.IndexPage_CanDeactivate}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
    click({selector: QaSel.CanDeactivatePage_First}),
    click({selector: QaSel.CanDeactivatePage_DialogueCancel}),
    click({selector: QaSel.CanDeactivatePage_Second}),
    click({selector: QaSel.CanDeactivatePage_DialogueYes}),
  ]], // => second page

  [TaskId.External, [
    click({selector: QaSel.IndexPage_External}),
    wait(3_000),
  ]], // => external page

  [TaskId.FirstPage, [
    click({selector: QaSel.IndexPage_First})
  ]],  // => first page
  [TaskId.FirstNotFoundPage, [
    click({selector: QaSel.IndexPage_First}),
    click({selector: QaSel.FirstPage_DoesntExist})
  ]],  // => first not found page
  [TaskId.CheckCustomTo, [
    click({selector: QaSel.IndexPage_First}),
    click({selector: QaSel.FirstPage_ToSecondPic})
  ]],  // => second picture page

  [TaskId.SecondPage, [
    click({selector: QaSel.IndexPage_Second})
  ]], // => second page
  [TaskId.SecondPicturePage, [
    click({selector: QaSel.IndexPage_Second}),
    click({selector: QaSel.SecondPage_Picture})
  ]], // => second picture page

  [TaskId.CancelTransition, [
    click({selector: QaSel.IndexPage_Second}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult}),
    wait(500),
    click({selector: QaSel.Header_Index}),
    wait(10_000),
  ]], // => index page
  [TaskId.LongTimeGettingOfActionResult, [
    click({selector: QaSel.IndexPage_Second}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult}),
    wait(6_000),
  ]], // => second picture page

  [TaskId.PreventDuplicates, [
    click({selector: QaSel.IndexPage_Second}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.SecondPage_LongTimeGettingOfActionResult, options: {delay: 100}}),
    click({selector: QaSel.Header_Index}),
    wait(5_000),
    click({selector: QaSel.Header_GoBack}),
    click({selector: QaSel.Header_GoBack}),
  ]], // => second page

]);
