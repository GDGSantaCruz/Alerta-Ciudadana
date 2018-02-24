import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NumberListComponent } from './emergency-numbers/number-list.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'emergencyNumbers',
    component: NumberListComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
