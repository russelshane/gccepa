import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UploadProfileComponent } from './pages/sign-up/upload-profile/upload-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { LoggedInUserComponent } from './pages/logged-in-user/logged-in-user.component';

export const routes: Routes = [
  // Landing page route. Do not add components inside the app
  // component other than the application router.
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'upload-profile',
    component: UploadProfileComponent,
  },
  {
    path: 'sign-in',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent,
  },
  {
    path: 'logged-in-user',
    component: LoggedInUserComponent,
  }
];
