import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/homeMatchFilms/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule),
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/registry/registry.module').then(m => m.RegistryPageModule),
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
    loadChildren: () => import('./pages/feed/feed.module').then(m => m.FeedPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
