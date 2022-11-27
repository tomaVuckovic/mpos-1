import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {Routes, RouterModule} from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';
import { homedir } from 'os';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1-routing.module').then(x=>x.Tab1PageRoutingModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab2/tab2-routing.module').then(x=>x.Tab2PageRoutingModule)
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
