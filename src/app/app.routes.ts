import { Routes } from '@angular/router';
import {
  ShowSearchPageComponent,
  SingleShowPageComponent,
} from './components/pages';

export const routes: Routes = [
  {
    path: '',
    component: ShowSearchPageComponent,
  },
  { path: 'show/:id', component: SingleShowPageComponent },
];
