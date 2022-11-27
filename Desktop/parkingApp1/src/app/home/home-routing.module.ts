import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'tab1',
        children:[
          {
            path:'',
            loadChildren:()=>import('../tab1/tab1.module').then(m=>m.Tab1PageModule)
          }
        ]
      },
      {
        path:'tab2',
        children:[
          {
            path:'',
            loadChildren:()=>import('../tab2/tab2.module').then(m=>m.Tab2PageModule)
          }
        ]
      },
      {//Path koji nas vodi sa logina tacno na tab1 - Moj profil
        path:'',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
