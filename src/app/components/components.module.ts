import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import forms module
import { FormsModule } from '@angular/forms';

// wysiwyg editor
import { AngularEditorModule } from '@kolkov/angular-editor';

// shared components
import { SharedModule } from '../shared/shared.module';

// generic components
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// ads components
import { AdsTableComponent } from './ads/ads-table/ads-table.component';
import { AdsGridComponent } from './ads/ads-grid/ads-grid.component';
import { AdsListingComponent } from './ads/ads-listing/ads-listing.component';
import { AdsFormComponent } from './ads/ads-form/ads-form.component';
import { AdsCardComponent } from './ads/ads-card/ads-card.component';
import { AdsHeaderComponent } from './ads/ads-header/ads-header.component';
import { AdsSearchComponent } from './ads/ads-search/ads-search.component';

// categories components
import { CategoriesGridComponent } from './categories/categories-grid/categories-grid.component';
import { CategoriesNavbarComponent } from './categories/categories-navbar/categories-navbar.component';
import { CategoriesSidebarComponent } from './categories/categories-sidebar/categories-sidebar.component';

// authentication components
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';

@NgModule({
  declarations: [
    // generic components
    NavbarComponent,
    SidebarComponent,
    // ads components
    AdsTableComponent,
    AdsGridComponent,
    AdsListingComponent,
    AdsFormComponent,
    AdsCardComponent,
    AdsHeaderComponent,
    AdsSearchComponent,
    // categories components
    CategoriesGridComponent,
    CategoriesNavbarComponent,
    CategoriesSidebarComponent,
    // authentication components
    LoginFormComponent,
    RegisterFormComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AngularEditorModule,
  ],

  exports: [
    // generic components
    NavbarComponent,
    SidebarComponent,
    // ads components
    AdsTableComponent,
    AdsGridComponent,
    AdsListingComponent,
    AdsFormComponent,
    AdsCardComponent,
    AdsHeaderComponent,
    AdsSearchComponent,
    // categories components
    CategoriesGridComponent,
    CategoriesNavbarComponent,
    CategoriesSidebarComponent,
    // authentication components
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class ComponentsModule { }
