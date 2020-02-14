import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
@Component({
  selector: 'consuming-http',
  templateUrl: './consuming-http.component.html',
  styleUrls: ['./consuming-http.component.css']
})
export class ConsumingHttpComponent implements OnInit {
  public users: any = []
  constructor(private service: PostService) {


  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe((response: any) => {
      if (response.length)
        this.users = response
    })
  }
  createPost(input: HTMLInputElement) {
    let user: any = { title: input.value };
    input.value = '';
    this.service.create(user)
    .subscribe((response) => {
      user['id'] = response.id;
      (this.users as any).splice(0, 0, user);
    },(error: AppError) => {
      if(error instanceof BadInput){
        alert ('an Error',error.originalError);
      }else{
        throw error; // we need to rethrow it so it will hit the global error Handler Method in appErrorHandler 
      }
      // this.form.setErrors(error);
    });
  }
  // updatePost(post) {
  //   this.http.patch(this.url, post, this.httpOptions).subscribe((response) => {
  //     post['id'] = response.id;
  //     (this.users as any).splice(0, 0, post);
  //   })
  // }
  delete(post) {
    this.service.deletePost(post).subscribe((response) => {
      let index = this.users.indexOf(post);
      this.users.splice(index, 1);

    },(error:AppError) => {
      if(error instanceof NotFoundError){
        alert('This post has already been deleted');
      }else{
        throw error;
      }
    })
  }
 
}
