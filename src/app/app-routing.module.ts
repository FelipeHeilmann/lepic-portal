import { MenuComponent } from './pages/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendencyComponent } from './pages/pendency/pendency.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "menu",
        pathMatch: "full",
      },
      {
        path: "menu",
        component: MenuComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "pendencias",
        component: PendencyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
