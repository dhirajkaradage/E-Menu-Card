import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedLayoutComponent } from './layout/authenticated/authenticated-layout/authenticated-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pre-login/pre-login.module').then((m) => m.PreLoginModule),
  },

  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/authenticated/authenticated.module').then(
            (m) => m.AuthenticatedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
