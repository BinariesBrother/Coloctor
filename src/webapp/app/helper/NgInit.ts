import {
  Directive,
  EventEmitter,
  Output,
  OnInit,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class InitDirective implements OnInit {
  constructor(private ref: ElementRef) {}

  @Output() init: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  ngOnInit() {
    this.init.emit(this.ref);
  }
}
