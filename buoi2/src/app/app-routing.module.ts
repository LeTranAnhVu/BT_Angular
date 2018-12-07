import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// default

const routes: Routes = [
  {path: 'heroes/:id', component: HeroDetailComponent},
  {path: 'heroes' , component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })


export class AppRoutingModule { }
