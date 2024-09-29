import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component'; // Task list
import { DescriptionComponent } from './description/description.component'; // Task detail

export const routes: Routes = [
  { path: '', component: TodoComponent }, // Task list
  { path: 'task/:id', component: DescriptionComponent } // Task detail with description
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
