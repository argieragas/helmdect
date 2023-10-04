import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ReportComponent } from './public/report/report.component';
import { DataComponent } from './public/data/data.component';
import { DetailsComponent } from './public/details/details.component';
import { SettingsComponent } from './public/settings/settings.component';
const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'report', component: ReportComponent},
      {path: 'data', component: DataComponent},
      {path: 'details', component: DetailsComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
