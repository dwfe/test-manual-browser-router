import {BrowserRouter, IResultListenersArg} from '@do-while-for-each/browser-router'
import {provider} from '@do-while-for-each/provider'
import {createRoot, Root} from 'react-dom/client';
import React, {ReactElement} from 'react'
import {IRouteResultHandlerOpt} from './contract';
import {GeneralTemplate} from '../component';

export class RouteResultHandler {

  private root: Root
  private router: BrowserRouter
  private unlistenFn!: () => void

  constructor(container: HTMLElement | null,
              private opt: IRouteResultHandlerOpt = {injectData: true}) {
    if (!container)
      throw new Error('Container element must be defined');
    this.root = createRoot(container);
    this.router = provider.get<BrowserRouter>(BrowserRouter);
  }

  start() {
    this.unlistenFn = this.router.resultListeners.push(this.onRouteResult.bind(this));
    this.router.start()
  }

  stop() {
    this.unlistenFn?.()
  }

  private onRouteResult(arg: IResultListenersArg) {
    const component = this.injectProps(arg);
    this.root.render(
      <GeneralTemplate>
        {component}
      </GeneralTemplate>
    )
  }

  private injectProps({component, actionData}: IResultListenersArg): ReactElement {
    if (this.opt.injectData)
      return React.isValidElement(component)
        ? React.cloneElement(component as any, {actionData})
        : component;
    return component;
  }

}
