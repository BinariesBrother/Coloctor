import {Component} from '@angular/core';
import {DrawerPanelProperties, PositionEnum} from './drawer-panel/drawer-panel.component';
import {HeaderHelperService, IHeaderContent} from '../helper/header-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.sass']
})
export class GlobalComponent {
  private title;
  public leftDrawerPanelProperties: DrawerPanelProperties;
  public rightDrawerPanelProperties: DrawerPanelProperties;
  protected headerList: IHeaderContent[];

  constructor (headerHelperService: HeaderHelperService) {
    this.title = 'App';
    this.leftDrawerPanelProperties = new DrawerPanelProperties(PositionEnum.LEFT);
    this.rightDrawerPanelProperties = new DrawerPanelProperties(PositionEnum.RIGHT);
    this.headerList = headerHelperService.element;
  }
}
