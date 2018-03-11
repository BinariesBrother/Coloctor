import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IHeaderMenu} from '../..//helper/header-helper.service';

@Component({
  selector: 'router-init',
  templateUrl: './router-init.component.html',
  styleUrls: ['./router-init.component.sass']
})
export class RouterInitComponent implements OnInit {

  @Input() header: IHeaderMenu;

  constructor (private router: Router) {
  }

  ngOnInit (): void {
    this.router.navigate(this.header.route, this.header.navigationExtra);
  }
}

