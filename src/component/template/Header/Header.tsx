import {Link} from '@do-while-for-each/browser-router-react-tools'
import {BrowserRouter} from '@do-while-for-each/browser-router'
import {useDIInstance} from '@do-while-for-each/react-tools'
import {QaSel} from '../../../__tests__/regress/task/qa-selector'
import {BtnNavigate} from '../../BtnNavigate/BtnNavigate'
import {GitGetCode} from '../../GitGetCode/GitGetCode'
import './Header.css'

export const Header = () => {
  const [router] = useDIInstance<BrowserRouter>(BrowserRouter)

  const backFn = () => router.goBack()
  const forwardFn = () => router.goForward()

  return (
    <header className="page-header">
      <nav className="page-header_nav">
        <BtnNavigate isBack={true} onClick={backFn}/>
        <Link href="/" data-qa={QaSel.Header_Index}>Index</Link>
        <BtnNavigate isBack={false} onClick={forwardFn}/>
      </nav>
      <div className="page-header_info">
        <ol>
          <li>The routes used can be seen&nbsp;
            <Link href="https://github.com/dwfe/test-manual-browser-router/blob/main/src/router/routes.tsx#L8" target="_blank">here</Link>
          </li>
          <li>Trace output you can see in console</li>
        </ol>
      </div>
      <div className="page-header_get-code">
        <GitGetCode href="https://github.com/dwfe/test-manual-browser-router"
                    text="get source of this demo"/>
      </div>
    </header>
  )
}

