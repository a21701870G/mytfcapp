import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },


  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then(m => m.NewPageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'guardado',
    loadChildren: () => import('./guardado/guardado.module').then(m => m.GuardadoPageModule)
  },
  {
    path: 'gestao',
    loadChildren: () => import('./gestao/gestao.module').then(m => m.GestaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },

  {
    path: 'alteraremail',
    loadChildren: () => import('./alteraremail/alteraremail.module').then( m => m.AlteraremailPageModule)
  },
  {
    path: 'controlo',
    loadChildren: () => import('./controlo/controlo.module').then( m => m.ControloPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'novo',
    loadChildren: () => import('./novo/novo.module').then( m => m.NovoPageModule)
  },
  {
    path: 'uploadficheiros',
    loadChildren: () => import('./uploadficheiros/uploadficheiros.module').then( m => m.UploadficheirosPageModule)
  },
  {
    path: 'topic',
    loadChildren: () => import('./topic/topic.module').then( m => m.TopicPageModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./conteudo/conteudo.module').then( m => m.ConteudoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
