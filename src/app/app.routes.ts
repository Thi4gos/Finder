import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/homeMatchFilms/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'preferences',
    loadComponent: () => import('./pages/preferences/preferences.page').then( m => m.PreferencesPage)
  },
  {
    path: 'registry',
    loadComponent: () => import('./pages/registry/registry.page').then( m => m.RegistryPage)
  },
  {
    path: 'change-pass',
    loadComponent: () => import('./pages/change-pass/change-pass.page').then( m => m.ChangePassPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'feed',
    loadComponent: () => import('./pages/feed/feed.page').then( m => m.FeedPage)
  },
];
