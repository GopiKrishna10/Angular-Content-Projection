import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {AppErrorHandler} from './common/app-error-handler'
import { AppComponent } from './app.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { ConsumingHttpComponent } from './consuming-http/consuming-http.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    CardOrListViewComponent,
    ConsumingHttpComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    PostService,
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
