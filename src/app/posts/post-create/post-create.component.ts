// import { Component, EventEmitter,Output } from '@angular/core';

import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import PostModel from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  enteredValue = '';
  @Output() postCreated = new EventEmitter<PostModel>();

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
    const post: PostModel = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }
}
