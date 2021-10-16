import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { MainComponent } from 'src/app/components/main/main.component';


const route : Routes = [
  {path: "", component: MainComponent, pathMatch: "full"},
  {path: "error", component: ErrorComponent},
  {path: "**", redirectTo: "/error"}
]


@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export class RoutingModule { }
