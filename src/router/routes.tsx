import {IActionData, IActionResult, IEntry, TCanActivateResult} from '@do-while-for-each/browser-router'
import {NotFoundPage} from '@do-while-for-each/browser-router-react-tools'
import {provider} from '@do-while-for-each/provider'
import {AuthService, CanDeactivatePage, FirstPage, IndexPage, LoginPage, PicPage, ProtectedByAuthorization, SecondPage, UserInfo} from '../page'
import {CanDeactivateService} from '../page/CanDeactivate/can-deactivate.service'

// @formatter:off
export const routes: IEntry[] = [
  {segment: '', component: <IndexPage/>, note: {title: 'Index'}},
  {segment: 'first', component: <FirstPage/>, note: {title: 'First page'}, children: [
      {segment: 'to-pic', customTo: {pathname: '/second/12/picture', search: '?hello=world', hash: '#pic'}},
      {segment: '**', redirectTo: '/not-found'}]},
  {segment: 'second', component: <SecondPage/>, note: {title: 'Second page'}, children: [
      {segment: ':page', children: [
          {segment: 'picture', component: <PicPage/>, note: {title: 'Picture'}},
          {segment: '**', action: longTimeGettingOfActionResult}]},]},
  {segment: 'protected-by-authorization', component: <ProtectedByAuthorization/>, canActivate: passIfLoggedIn, children: [
      {segment: 'user-info', component: <UserInfo/>, canActivate: passIfUserInfoUnlocked}]},
  {segment: 'can-deactivate-check', component: <CanDeactivatePage/>, canDeactivate: canDeactivateFn},
  {segment: 'login', component: <LoginPage/>},
  {segment: 'not-found', component: <NotFoundPage/>, note: {title: 'Not found page'}},
  {segment: '**', redirectTo: '/not-found'}
];
// @formatter:on


function longTimeGettingOfActionResult(data: IActionData): Promise<IActionResult> {
  return new Promise(resolve => {
    setTimeout(() => resolve({redirectTo: '/second/hello/picture'}), 5_000)
  })
}

function passIfLoggedIn(data: IActionData): Promise<TCanActivateResult> {
  return provider.get<AuthService>(AuthService).passIfLoggedIn(data)
}

function passIfUserInfoUnlocked(data: IActionData): Promise<TCanActivateResult> {
  return provider.get<AuthService>(AuthService).passIfUserInfoUnlocked(data)
}

function canDeactivateFn(tryRelocation: any, data: IActionData): Promise<boolean> {
  return provider.get<CanDeactivateService>(CanDeactivateService).canDeactivate(tryRelocation, data)
}

