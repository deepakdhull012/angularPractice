import { NgModule } from '@angular/core';

import { QuestionListComponent } from './question-list/question-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { questionsRouting } from './question.routes';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailResolverGuard } from '../../guards/question-detail-resolver-guard.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:[questionsRouting,RouterModule],
  declarations: [QuestionListComponent,AddQuestionComponent,QuestionDetailComponent, QuestionComponent],
  providers: [QuestionDetailResolverGuard],
  exports: [RouterModule]
})
export class QuestionModule{

}
