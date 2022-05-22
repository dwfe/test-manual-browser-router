import {IRoutableProps, RouteActionData} from '@do-while-for-each/browser-router-react-tools';

export function UserInfo(props: IRoutableProps) {
  return (
    <div>
      <h3>User info</h3>
      <p>name: user-name</p>
      <p>some: other</p>
      <br/><br/>
      <RouteActionData actionData={props.actionData}/>
    </div>
  );
}
