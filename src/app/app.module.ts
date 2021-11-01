import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

// import env variables
import { environment } from '../environments/environment';

// wysiwyg editor
import { AngularEditorModule } from '@kolkov/angular-editor';

// socket.io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.chatApiBaseUrl, options: {} };

//  ngxs store imports
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// import states
import { AuthState } from './store/state/authentication.state';
import { CategoryState } from './store/state/category.state';
import { AdState } from './store/state/ad.state';
import { ChatState } from './store/state/chat.state';
import { TradeState } from './store/state/trade.state';

// import helpers
import { AuthGuard } from './helpers/auth.guard';
import { JWTInterceptor } from './helpers/jwt.interceptor';

// shared layout pages
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { PageComponent } from './layouts/page/page.component';

//  generic pages
import { HomeComponent } from './views/home/home.component';

// ads pages
import { FormComponent } from './views/ads/form/form.component';
import { ListingComponent } from './views/ads/listing/listing.component';
import { SingleComponent } from './views/ads/single/single.component';

// categories pages
import { ListComponent } from './views/categories/list/list.component';
import { TilesComponent } from './views/categories/tiles/tiles.component';

// profile page
import { ProfileComponent } from './views/profile/profile.component';

// account pages
import { WalletComponent } from './views/account/wallet/wallet.component';
import { AdsComponent } from './views/account/ads/ads.component';
import { OverviewComponent } from './views/account/overview/overview.component';
import { TradeComponent } from './views/account/trades/trade/trade.component';
import { TradesComponent } from './views/account/trades/trades/trades.component';

// authentication pages
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component';

// import share components
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // layout pages
    DashboardComponent,
    AuthenticationComponent,
    PageComponent,
    // generic pages
    HomeComponent,
    // ads pages
    FormComponent,
    ListingComponent,
    SingleComponent,
    // profile page
    ProfileComponent,
    // categories page
    ListComponent,
    TilesComponent,
    // account pages
    OverviewComponent,
    TradesComponent,
    TradeComponent,
    WalletComponent,
    AdsComponent,
    // authentication pages
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SharedModule,
    // ngxs store imports
    NgxsModule.forRoot([
      AuthState,
      CategoryState,
      AdState,
      TradeState,
      ChatState,
    ], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    AngularEditorModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
