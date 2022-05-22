import {BrowserRouter, IBrowserRouterOptions} from '@do-while-for-each/browser-router';
import {provider} from '@do-while-for-each/provider'
import {routes} from './router';

const routerOpt: IBrowserRouterOptions = {
  isDebug: true,
  pathResolver: {
    isDebug: true,
  }
}

provider.register(
  {provide: BrowserRouter, useValue: new BrowserRouter(routes, routerOpt)},
);
