import {Component} from '@angular/core';
import {HeaderHelperService} from '../../helper/header-helper.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-banane',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.sass']
})
export class GroupeComponent {
  private headerHelperService: HeaderHelperService;

  constructor (headerHelperService: HeaderHelperService, private route: ActivatedRoute) {
    this.headerHelperService = headerHelperService;
    this.headerHelperService.addHeaderContent({
      headerTitle: 'Groupes',
      headerMenus: [
        {
          name: 'Depenses', route: ['./depenses'], navigationExtra: {relativeTo: this.route}
        },
        {name: 'Remboursements', route: ['./remboursements'], navigationExtra: {relativeTo: this.route}},
        {name: 'Repetition', route: ['./repetition'], navigationExtra: {relativeTo: this.route}},
        {name: 'Membres', route: ['./membres'], navigationExtra: {relativeTo: this.route}}]
    });
  }

  ngOnDestroy () {
    this.headerHelperService.removeTitleTail();
  }
}

