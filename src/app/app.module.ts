import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppendHeaderRequestInterceptor } from './http/interceptors/append-header.request.interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { CoreModule } from './components/core/core.module';
import { UsersModule } from './components/users/users.module'
import { AppRoutingModule } from './routes/app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/reducer';
import { QuestionListComponent } from './components/questions/question-list/question-list.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { QuestionDetailComponent } from './components/questions/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionComponent,
    QuestionDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({reducer})

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppendHeaderRequestInterceptor, multi: true }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
