import {IActionData, ILocation} from '@do-while-for-each/browser-router';
import {single} from '@do-while-for-each/provider'
import {Subj} from '@do-while-for-each/rxjs'

@single
export class CanDeactivateService {

  isItBeingCheckedNow = false
  initCheck: any
  tryRelocation: ILocation | null = null

  canBeDeactivated = new Subj<boolean>()

  async canDeactivate(tryRelocation: ILocation, data: IActionData): Promise<boolean> {
    if (this.isItBeingCheckedNow) {
      return false
    } else {
      this.tryRelocation = tryRelocation
      this.initCheck()
      const result = await this.canBeDeactivated.nextValuePromise();
      this.tryRelocation = null
      return result
    }
  }
}
