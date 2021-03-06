import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },

  { path: 'learn', loadChildren: './learn/learn.module#LearnPageModule' },

  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  {
    path: 'learn-complete',
    loadChildren: './learn-complete/learn-complete.module#LearnCompletePageModule'
  },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
