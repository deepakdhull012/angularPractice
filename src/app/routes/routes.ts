import { Routes } from '@angular/router';
import { LandingComponent } from './../components/core/landing/landing.component';
import { HomeComponent } from '../components/core/home/home.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { UsersListComponent } from '../components/users/users-list/users-list.component';
import { QuestionListComponent } from '../components/questions/question-list/question-list.component';
import { AddQuestionComponent } from '../components/questions/add-question/add-question.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LandingComponent },
    { path: 'home', component: HomeComponent, canActivate : [AuthGuardService],
      children : [
        { path: '', component: UsersListComponent, canActivate: [AuthGuardService]},
        { path: 'users', component: UsersListComponent, canActivate: [AuthGuardService]},
        { path: 'questions',loadChildren: './../components/questions/questions.module#QuestionModule' }
      ]
    },
];

