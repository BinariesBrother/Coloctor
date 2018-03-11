import {Injectable} from '@angular/core';

export interface IHeaderMenu {
  name: string;
  route?: any[];
  navigationExtra?: any;
}

export interface IHeaderContent {
  headerTitle: string;
  headerMenus?: IHeaderMenu[];
}

@Injectable()
export class HeaderHelperService {

  private headerList: IHeaderContent[];

  constructor () {
    this.headerList = [{headerTitle: 'Coloctor'}];
  }

  public addHeaderContent (header: IHeaderContent): void {
    this.headerList.push(header);
  }

  public removeTitleTail (): void {
    if (this.headerList.length > 1) {
      this.headerList.pop();
    }
  }

  public get element (): IHeaderContent[] {
    return this.headerList;
  }

}
