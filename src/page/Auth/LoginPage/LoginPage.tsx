import {IRoutableProps, RouteActionData} from '@do-while-for-each/browser-router-react-tools'
import {useDIInstance} from '@do-while-for-each/react-tools'
import Modal from 'react-modal'
import {useState} from 'react'
import {defaultModalStyles} from '../../CanDeactivate/modal.settings'
import {QaSel} from '../../../__tests__/regress/task/qa-selector'
import {AuthService} from '../auth.service'
import './LoginPage.css'

Modal.setAppElement('#root')

export const LoginPage = (props: IRoutableProps) => {
  const [auth] = useDIInstance<AuthService>(AuthService)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)

  const logIn = () => {
    if (isNonEmptyString(username) && isNonEmptyString(password))
      auth.logIn(username, password)
    else {
      setShowModal(true)
      setTimeout(() => {
        const btn = document.querySelector(`[data-ok=ok]`) as HTMLButtonElement
        btn?.focus()
      }, 50)
    }
  }

  return (
    <div>
      <div className="login-block">
        <h3>Please log in</h3>
        <div className="login-block_req  login-block_req--username">
          <label htmlFor="username">username:</label>
          <input required type="text" id="username"
                 value={username}
                 onChange={(event) => setUsername(event.target.value)}
                 data-qa={QaSel.LoginPage_Username}/>
        </div>
        <div className="login-block_req">
          <label htmlFor="password">password:</label>
          <input required type="password" id="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
                 data-qa={QaSel.LoginPage_Password}/>
        </div>
        <button onClick={logIn} data-qa={QaSel.LoginPage_LogIn}>Ok</button>
      </div>
      <br/><br/>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={defaultModalStyles}
      >
        <p>Fill fields <b>username</b> and <b>password</b> with something</p>
        <button onClick={closeModal} data-ok="ok">Ok</button>
      </Modal>

      <RouteActionData actionData={props.actionData}/>
    </div>
  )
}

const isNonEmptyString = (str: any) => typeof str === 'string' && str
