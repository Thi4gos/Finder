import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule),
  },
  {
    path: 'change-pass',
    loadChildren: () => import('./pages/change-pass/change-pass.module').then(m => m.ChangePassPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'change-pass',
    loadChildren: () => import('./pages/change-pass/change-pass.module').then( m => m.ChangePassPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/registry/registry.module').then( m => m.RegistryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
