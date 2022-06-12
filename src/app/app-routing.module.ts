import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ZtzyrantComponent } from './ztzyrant/ztzyrant.component';

const routes: Routes = [{
  path:'',
  component: ZtzyrantComponent
  }, {
    path:'anisite',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path:'contact',
    component: ContactusComponent,
    pathMatch: 'full'
  }, {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
