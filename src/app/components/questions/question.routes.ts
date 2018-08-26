import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionDetailResolverGuard } from '../../guards/question-detail-resolver-guard.service';
import { QuestionComponent } from './question/question.component';


export const QUESTIONS_ROUTES: Routes = [

  {
    path: '',
    component: QuestionComponent,
    children : [
      { path: 'add', component: AddQuestionComponent, canActivate: [AuthGuardService] },
  {
    path: 'list',
    component: QuestionListComponent
  },
  {
    path: 'detail/:id',
    component: QuestionDetailComponent,
    resolve: [QuestionDetailResolverGuard]
  }
    ]
  }
];

export const questionsRouting = RouterModule.forChild(QUESTIONS_ROUTES);
