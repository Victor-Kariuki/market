import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Profile } from '../../models/profile.model';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { LoginUser, RegisterUser, ForgotPassword, LogoutUser, FetchUserProfile } from '../actions/authentication.actions';

export class AuthStateModel {
  token: string | null;
  loading: boolean;
  profile: Profile;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    loading: false,
    profile: null,
  }
})

@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authenticationService: AuthenticationService) {}

  @Action(LoginUser)
  loginUser(ctx: StateContext<AuthStateModel>, action: LoginUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.authenticationService.login(action.payload)
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        const token = res['message']['token'];
        ctx.setState({
          ...state,
          token,
          loading: false,
        });
      }));
  }

  @Action(RegisterUser)
  registerUser(ctx: StateContext<AuthStateModel>, action: RegisterUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.authenticationService.register(action.payload)
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        const token = res['message']['token'];
        ctx.setState({
          ...state,
          token,
          loading: false,
        });
      }));
  }

  @Action(ForgotPassword)
  forgotPassword(ctx: StateContext<AuthStateModel>, action: ForgotPassword) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.authenticationService.forgotPassword(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: false,
        });
      }));
  }

  @Action(LogoutUser)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.authenticationService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          ...state,
          token: null,
          loading: false,
        });
      })
    );
  }

  @Action(FetchUserProfile)
  fetchUserProfile(ctx: StateContext<AuthStateModel>, action: FetchUserProfile) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
    let profile: Profile = null;
    return this.authenticationService.fetchUserProfile(action.payload)
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        profile = res['message'];
        ctx.setState({
          ...state,
          profile,
          loading: false,
        });
      }));
  }

}
