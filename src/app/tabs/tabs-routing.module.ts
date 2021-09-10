import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'conteudo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../conteudo/conteudo.module').then(m => m.ConteudoPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../new/new.module').then(m => m.NewPageModule)
          }
        ]
      },
      {
        path: 'forum',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../forum/forum.module').then(m => m.ForumPageModule)
          }
        ]
      },
      {
        path: 'ranking',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ranking/ranking.module').then(m => m.RankingPageModule)
          }
        ]
      },
      {
        path: 'finish',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../finish/finish.module').then(m => m.FinishPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
