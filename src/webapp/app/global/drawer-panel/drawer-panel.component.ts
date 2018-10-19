import {Component, Input} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

export class DrawerPanelProperties {
  isOpen: boolean;
  position: PositionEnum;

  constructor (position: PositionEnum) {
    this.isOpen = false;
    this.position = position;
  }

  isLeft (position: PositionEnum): boolean {
    return position === PositionEnum.LEFT;
  }

  isRight (position: PositionEnum): boolean {
    return position === PositionEnum.RIGHT;
  }

  public get class (): string {
    return this.isLeft(this.position) ? 'menu-left' : 'menu-right';
  }
}

export enum PositionEnum {
  LEFT,
  RIGHT
}

@Component({
  selector: 'drawer-panel',
  templateUrl: './drawer-panel.component.html',
  styleUrls: ['./drawer-panel.component.sass'],
  animations: [
    trigger('drawer', [
      state('inactive', style({
        width: '0'
      })),
      state('active', style({
        width: '100%'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class DrawerPanelComponent {
  @Input() properties: DrawerPanelProperties;
  @Input() matIcon: string;

  constructor (private router: Router) {
    this.routeChange(router);
  }

  close (): void {
    this.properties.isOpen = false;
  }

  open (): void {
    this.properties.isOpen = true;
  }

  empty (event): void {
    event.stopPropagation();
  }

  private routeChange (router: Router) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.close();
      }

    });
  }
}
