import {IRoutableProps, Link, RouteActionData} from '@do-while-for-each/browser-router-react-tools';
import {QaSel} from '../../__tests__/regress/task/qa-selector';

export function NeedToUnlockUserInfo(props: IRoutableProps) {
  return (
    <div>
      <p>First you need to unlock UserInfo.</p>
      <p>You can do this on the page: <Link href="/protected-by-authorization" data-qa={QaSel.NeedToUnlockUserInfo_AuthorizationRequired}>authorization required</Link></p>
      <br/><br/>
      <RouteActionData actionData={props.actionData}/>
    </div>
  );
}
