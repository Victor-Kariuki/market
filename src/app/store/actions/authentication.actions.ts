import { Login } from '../../models/login.model';
import { Register } from '../../models/register.model';

export class LoginUser {
  static readonly type = '[Auth] Login';
  constructor(public payload: Login) {}
}

export class RegisterUser {
  static readonly type = '[Auth] Register';
  constructor(public payload: Register) {}
}

export class ForgotPassword {
  static readonly type = '[Auth] ForgotPassword';
  constructor(public payload: string) {}
}

export class LogoutUser {
  static readonly type = '[Auth] Logout';
  constructor() {}
}

export class FetchUserProfile {
  static readonly type = '[Auth] FetchUserProfile';
  constructor(public payload: string) {}
}
