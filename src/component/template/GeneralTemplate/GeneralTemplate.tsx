import {Footer, Header, Main} from '../index'
import {PathPrint} from '../../index'
import './GeneralTemplate.css'

export const GeneralTemplate = (props: any) => {

  return (
    <div className="general-tmpl">
      <Header/>
      <PathPrint/>
      <Main>
        {props.children}
      </Main>
      <Footer/>
    </div>
  )
}
