import {IRoutableProps, Link, RouteActionData} from '@do-while-for-each/browser-router-react-tools'
import {useControlledRender, useDIInstance} from '@do-while-for-each/react-tools'
import {QaSel} from '../../__tests__/regress/task/qa-selector'
import {AuthService} from './auth.service'

export const ProtectedByAuthorization = (props: IRoutableProps) => {
  const [auth] = useDIInstance<AuthService>(AuthService)
  const renderRunFn = useControlledRender();

  const logOut = () => auth.logOut();
  const changeUserInfoLocked = (val: boolean) => {
    auth.setUserInfoLocked(val);
    renderRunFn();
  };

  return (<div>
    <p>Congratulations!</p>
    <p>You have access to this protected by authorization page.</p>
    <button onClick={logOut} data-qa={QaSel.LoginPage_LogOut}>Log Out</button>
    <br/><br/>
    {auth.isUserInfoLocked
      ? <button onClick={() => changeUserInfoLocked(false)} data-qa={QaSel.ProtectedByAuthorization_LockUnlockBtn}>Unlock UserInfo</button>
      : <button onClick={() => changeUserInfoLocked(true)} data-qa={QaSel.ProtectedByAuthorization_LockUnlockBtn}>Lock UserInfo</button>}
    &nbsp;&nbsp;<Link href="/protected-by-authorization/user-info">user-info</Link>
    <br/><br/>
    <RouteActionData actionData={props.actionData}/>
  </div>)
}
