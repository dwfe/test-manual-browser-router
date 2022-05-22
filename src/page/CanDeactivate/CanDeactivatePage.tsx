import {IRoutableProps, Link, RouteActionData, useDocumentTitle} from '@do-while-for-each/browser-router-react-tools'
import {useDIInstance} from '@do-while-for-each/react-tools'
import Modal from 'react-modal'
import {useState} from 'react'
import {QaSel} from '../../__tests__/regress/task/qa-selector'
import {CanDeactivateService} from './can-deactivate.service'
import {defaultModalStyles} from './modal.settings'

Modal.setAppElement('#root')

export const CanDeactivatePage = (props: IRoutableProps) => {
  useDocumentTitle(props)

  const [showModal, setShowModal] = useState(false)
  const [deactSrv] = useDIInstance<CanDeactivateService>(CanDeactivateService)
  deactSrv.isItBeingCheckedNow = showModal
  deactSrv.initCheck = () => setShowModal(true)
  const canBeDeactivated = (value: boolean) => {
    setShowModal(false)
    deactSrv.canBeDeactivated.setValue(value)
  }
  const afterOpenModal = () => {
    const btn = document.querySelector(`[data-qa=${QaSel.CanDeactivatePage_DialogueYes}]`) as HTMLButtonElement
    btn?.focus()
  }

  return (
    <div>
      <p>Try to leave the page</p>
      <Link href="/first" data-qa={QaSel.CanDeactivatePage_First}>first</Link><br/><br/>
      <Link href="/second" data-qa={QaSel.CanDeactivatePage_Second}>second</Link><br/><br/>

      <Modal
        isOpen={showModal}
        onRequestClose={() => canBeDeactivated(false)}
        onAfterOpen={afterOpenModal}
        style={defaultModalStyles}
      >
        <p>Are you sure you want to go to <code><b>{deactSrv.tryRelocation?.pathname}</b></code> page?</p>
        <div>
          <button onClick={() => canBeDeactivated(true)} data-qa={QaSel.CanDeactivatePage_DialogueYes}>Yes</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => canBeDeactivated(false)} data-qa={QaSel.CanDeactivatePage_DialogueCancel}>Cancel</button>
        </div>
      </Modal>

      <RouteActionData actionData={props.actionData}/>
    </div>
  )
}
