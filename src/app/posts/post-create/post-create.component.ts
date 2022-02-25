// import { Component, EventEmitter,Output } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  enteredValue = '';
  // @Output() postCreated = new EventEmitter();

  onAddPost() {
    this.enteredContent = this.enteredValue;
  }
}
