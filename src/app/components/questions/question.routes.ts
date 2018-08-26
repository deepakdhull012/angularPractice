import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


export const QUESTIONS_ROUTES: Routes = [
  { path: 'add', component: AddQuestionComponent, canActivate: [AuthGuardService] },
  {
    path: 'list',
    component: QuestionListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'detail',
    component: QuestionDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: QuestionListComponent,
  }
];

export const questionsRouting = RouterModule.forChild(QUESTIONS_ROUTES);
