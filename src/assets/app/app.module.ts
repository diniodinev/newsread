import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {MediaItemComponent} from "./media-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MediaItemListComponent} from './media-item-list.component';
import {FavouriteDirective} from "./favourite.directive";
import {CategoryListPipe} from "./category-list.pipe";
import {MediaItemFormComponent} from './media-item-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../app/shared/material.module";

const routes: Routes = [// {path: 'contactmanager', loadChildren: () => import('../../app/contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)},
 // {path: 'demo', loadChildren: () => import('../../app/demo/demo.module').then(m => m.DemoModule)},
//  {path: '**', redirectTo: 'contactmanager'}
]

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, FormsModule, MaterialModule],
  //  RouterModule.forRoot(routes)
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent, FavouriteDirective, CategoryListPipe, MediaItemFormComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
