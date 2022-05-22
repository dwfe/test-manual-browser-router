import {IRoutableProps, Link, RouteActionData, useDocumentTitle} from '@do-while-for-each/browser-router-react-tools'
import {QaSel} from '../../__tests__/regress/task/qa-selector'

export const SecondPage = (props: IRoutableProps) => {
  useDocumentTitle(props)

  return (
    <>
      <p>Second works!</p>
      <Link href="/second/lala/picture" ctx={{math: 'matrix'}} data-qa={QaSel.SecondPage_Picture}>Picture component</Link><br/><br/>
      <Link href="/second/hello/world" data-qa={QaSel.SecondPage_LongTimeGettingOfActionResult}>long time getting of action result (5 seconds)</Link><br/><br/>
      <Link href="/first#warning" data-qa={QaSel.SecondPage_First}>to first component</Link><br/><br/>
      <RouteActionData actionData={props.actionData}/>
    </>
  );
}
