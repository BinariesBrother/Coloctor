import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'panel-navigation',
  templateUrl: './panel-navigation.component.html',
  styleUrls: ['./panel-navigation.component.sass']
})
export class PanelNavigationComponent implements OnInit {

  public nouveauGroupe: string;

  constructor (private router: Router) {}

  ngOnInit () {
    this.nouveauGroupe = null;
  }

  public groupe (groupeId: number): void {
    this.router.navigate(['/groupe', groupeId]);
  }

  public demandeNouveauGroupe (): void {
    this.nouveauGroupe = '';
  }

  public cancelNouveauGroupe (): void {
    this.nouveauGroupe = null;
  }

  public saveNouveauGroupe (): any {

  }

  public nomFormControl = new FormControl('nouveauGroupe', [
    Validators.required,
    Validators.maxLength(5),
    Validators.minLength(3)
  ]);

  public matcher = new MyErrorStateMatcher();
}
