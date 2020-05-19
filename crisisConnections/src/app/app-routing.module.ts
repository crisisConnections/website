import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
}
];
=======
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: 'main-page', component: MainPageComponent},
  { path: '',   redirectTo: '\main-page', pathMatch: 'full' }];
>>>>>>> c8b8896ad733a89d70b9799977fbbe5b74f7209e

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
