import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'content-projection-app';
  // loginText = 'Login';
  // signUpText = 'Sign Up';
  // // loading = true;
  // lessons = ['Lesson 1', 'Lessons 2'];

  // totalEstimate = 10;

  // templateCtx = { estimate: this.totalEstimate };
  // @ViewChild('defaultTabButtons')
  // private defaultTabButtonsTpl: TemplateRef<any>;
  // ngOnInit() {
  //   console.log(this.defaultTabButtonsTpl);
  // }

  // login() {
  //   console.log('Login');
  // }

  // signUp() {
  //   console.log('Sign Up');
  // }
  mode = 'card';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
     {
      header: 'Sample Header',
      content: 'Sample Content...'
    }
  ];
}
