import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../component/card/card.component';
import { ReportComponent } from './report/report.component';
import { DataComponent } from './data/data.component';
import { DetailsComponent } from './details/details.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from '../component/header/header.component';
import { VisualComponent } from '../component/visual/visual.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    CardComponent,
    ReportComponent,
    DataComponent,
    DetailsComponent,
    HeaderComponent,
    SettingsComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  bootstrap:[PublicComponent]
})
export class PublicModule {
 }
