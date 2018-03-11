import {Component, Input} from '@angular/core';

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
  styleUrls: ['./drawer-panel.component.sass']
})
export class DrawerPanelComponent {
  @Input() properties: DrawerPanelProperties;
  @Input() matIcon: string;

  close () {
    this.properties.isOpen = false;
  }

  open () {
    this.properties.isOpen = true;
  }

  empty (event) {
    event.stopPropagation();
  }
}
