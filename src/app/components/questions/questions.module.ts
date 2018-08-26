import { NgModule } from '@angular/core';

import { QuestionListComponent } from './question-list/question-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { questionsRouting } from './question.routes';


@NgModule({
  imports:[questionsRouting],
  declarations: [QuestionListComponent,AddQuestionComponent,QuestionDetailComponent]
})
export class QuestionModule{

}
