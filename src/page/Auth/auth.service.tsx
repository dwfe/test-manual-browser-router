import {BrowserRouter, IActionData, IActionResult, TCanActivateResult, To} from '@do-while-for-each/browser-router'
import {single} from '@do-while-for-each/provider'
import {NeedToUnlockUserInfo} from './NeedToUnlockUserInfo';

export const LOGGED_KEY = 'logged'

@single
export class AuthService {

  isUserInfoLocked = true;

  redirectTo: To = {pathname: ''}

  constructor(private router: BrowserRouter) {
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(LOGGED_KEY)
  }

  logIn(username: string, password: string) {
    if (username && password) {
      localStorage.setItem(LOGGED_KEY, username + password)
      if (this.redirectTo)
        this.router.redirect(this.redirectTo)
    }
  }

  setUserInfoLocked(val: boolean) {
    this.isUserInfoLocked = val;
  }

  logOut() {
    localStorage.removeItem(LOGGED_KEY)
    this.router.goto('/')
  }

  async passIfLoggedIn(data: IActionData): Promise<TCanActivateResult> {
    if (this.isLoggedIn())
      return true;
    else {
      this.redirectTo = data.target // the user will be redirected here after successful login
      return {redirectTo: '/login'};
    }
  }

  async passIfUserInfoUnlocked(data: IActionData): Promise<TCanActivateResult> {
    if (this.isUserInfoLocked)
      return {component: <NeedToUnlockUserInfo/>} as IActionResult;
    return true;
  }
}

