import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  constructor(private location: Location) {}

  @Input() title: string = '';
  @Output() onNew = new EventEmitter<void>();

  goBack() {
    this.location.back();
  }

  newItem() {
    this.onNew.emit();
  }
}
