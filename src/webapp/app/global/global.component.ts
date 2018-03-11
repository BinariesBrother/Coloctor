import {Component} from '@angular/core';
import {DrawerPanelProperties, PositionEnum} from './drawer-panel/drawer-panel.component';
import {HeaderHelperService, IHeaderContent} from '../helper/header-helper.service';
import {Router, Event, NavigationStart} from '@angular/router';

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

  constructor (router: Router, headerHelperService: HeaderHelperService) {
    this.title = 'App';
    this.leftDrawerPanelProperties = new DrawerPanelProperties(PositionEnum.LEFT);
    this.rightDrawerPanelProperties = new DrawerPanelProperties(PositionEnum.RIGHT);
    this.headerList = headerHelperService.element;
    this.routeChange(router);
  }

  openDrawerPanel (drawerPanelProperties: DrawerPanelProperties): void {
    drawerPanelProperties.isOpen = true;
  }

  private routeChange (router: Router) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {

      }

    });
  }
}
