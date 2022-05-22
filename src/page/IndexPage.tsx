import {IRoutableProps, Link, RouteActionData, useDocumentTitle} from '@do-while-for-each/browser-router-react-tools'
import {QaSel} from '../__tests__/regress/task/qa-selector'

export const IndexPage = (props: IRoutableProps) => {
  useDocumentTitle(props)

  return (
    <div>
      <Link href="/hello" data-qa={QaSel.IndexPage_DoesntExist}>page that doesn't exist</Link><br/><br/>
      <Link href="/protected-by-authorization" data-qa={QaSel.IndexPage_AuthorizationRequired}>authorization required</Link><br/><br/>
      &nbsp;&nbsp;<Link href="/protected-by-authorization/user-info" data-qa={QaSel.IndexPage_UserInfo}>user-info</Link><br/><br/>
      <Link href="/can-deactivate-check" data-qa={QaSel.IndexPage_CanDeactivate}>can deactivate</Link><br/><br/>
      <Link href="https://www.rfc-editor.org/rfc/rfc7230" data-qa={QaSel.IndexPage_External}>external - Hypertext Transfer Protocol, RFC</Link><br/><br/>
      <Link href="/first" data-qa={QaSel.IndexPage_First}>First component</Link><br/><br/>
      <Link href="/second" data-qa={QaSel.IndexPage_Second}>Second component</Link><br/><br/>
      <RouteActionData actionData={props.actionData}/>
    </div>
  )
}
