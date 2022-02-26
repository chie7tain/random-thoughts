// import { Component, EventEmitter,Output } from '@angular/core';

import { Component } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  enteredValue = '';

  constructor(public postsService: PostsService) {}
  value = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.value.hasError('required')) {
      return 'You must enter a value';
    }

    return this.value.hasError('value') ? 'Not a valid value' : '';
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);
  }
}
