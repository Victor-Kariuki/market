import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import authentication guard
import { AuthGuard } from './helpers/auth.guard';

// import the layouts
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PageComponent } from './layouts/page/page.component';

// import views
//  generic pages
import { HomeComponent } from './views/home/home.component';

// ads pages
import { ListingComponent } from './views/ads/listing/listing.component';
import { SingleComponent } from './views/ads/single/single.component';
import { FormComponent } from './views/ads/form/form.component';

// categories pages
import { ListComponent } from './views/categories/list/list.component';
import { TilesComponent } from './views/categories/tiles/tiles.component';

// profile page
import { ProfileComponent } from './views/profile/profile.component';

// account pages
import { OverviewComponent } from './views/account/overview/overview.component';
import { WalletComponent } from './views/account/wallet/wallet.component';
import { AdsComponent } from './views/account/ads/ads.component';
import { TradesComponent } from './views/account/trades/trades/trades.component';
import { TradeComponent } from './views/account/trades/trade/trade.component';


// authentication pages
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component';

// error pages
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  // public routes go here
  {
    path: '',
    component: PageComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'listings', component: ListingComponent },
      { path: 'listings/:category', component: ListComponent },
      { path: 'ads/:ad', component: SingleComponent },
      { path: 'ad/create', component: FormComponent },
      { path: 'ad/edit/:ad', component: FormComponent },
      { path: 'categories', component: TilesComponent},
      { path: 'profile/:email', component: ProfileComponent },
    ]
  },

  // authentication routes go here
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // account routes go here
  {
    path: 'account',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OverviewComponent, pathMatch: 'full' },
      { path: 'ads', component: AdsComponent },
      { path: 'trades', component: TradesComponent },
      { path: 'trades/:trade', component: TradeComponent },
      { path: 'wallet', component: WalletComponent },
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
