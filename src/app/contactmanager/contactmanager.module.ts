import {Routes, RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';

import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      {path: '', component: MainContentComponent}
    ]
  },
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule {
}
