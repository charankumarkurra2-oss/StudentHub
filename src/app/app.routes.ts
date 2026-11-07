import { Routes } from '@angular/router';

import { Login } from './component/login/login';
import { Home } from './component/home/home';
import { Calculator } from './component/calculator/calculator';
import { Feedback } from './component/feedback/feedback';
import { Todo } from './component/todo/todo';
import { Profile } from './component/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'calculator', component: Calculator },
  { path: 'feedback', component: Feedback },
  { path: 'todo', component: Todo },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: 'login' }
];