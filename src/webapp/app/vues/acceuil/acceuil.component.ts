import {Component} from '@angular/core';
import {HeaderHelperService} from '../../helper/header-helper.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.sass']
})
export class AcceuilComponent {
  private title = 'acceuil';
  private headerHelperService: HeaderHelperService;

  constructor (headerHelperService: HeaderHelperService) {
    this.headerHelperService = headerHelperService;
    this.headerHelperService.addHeaderContent({headerTitle: 'acceuil'});
  }

  ngOnDestroy () {
    this.headerHelperService.removeTitleTail();
  }
}

