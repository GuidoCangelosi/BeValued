import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from '../app/components/person-details/person-details.component';

const routes: Routes = [
  { path: 'personDetails/:id', component: PersonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
