import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/src/Subscriber';

@Injectable()
export class UserHelperService {

  private webSocket: any;
  private suscriber: Subscriber<boolean>;

  constructor () {
    this.webSocket = null;
  }

  public get isConnected (): boolean {
    return !!this.webSocket;
  }

  public get connection (): any {
    return this.webSocket;
  }

  public startConnection (): void {
    if (this.isConnected) {
      this.suscriber.next(true);
    }
    this.suscriber = null;
  }

  public setConnectionObserver (suscriber: Subscriber<boolean>) {
    this.suscriber = suscriber;
  }

}
