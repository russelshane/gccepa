import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ContactComponent } from './pages/contact/contact.component';

import { LoginComponent } from './pages/login/login.component';

import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UploadProfileComponent } from './pages/sign-up/upload-profile/upload-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { UserExperiencesComponent } from './pages/user-experiences/user-experiences.component';
import { UpcomingComponent } from './pages/user-experiences/upcoming/upcoming.component';

import { UserAccountComponent } from './pages/user-account/user-account.component';

// Admin Pages
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';

import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';

import { AdminAttendanceComponent } from './pages/admin/admin-attendance/admin-attendance.component';

import { AdminExperiencesComponent } from './pages/admin/admin-experiences/admin-experiences.component';

export const routes: Routes = [
  // Landing page route. Do not add components inside the app
  // component other than the application router.
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'user-experiences',
    component: UserExperiencesComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
  },
  {
    path: 'user-account',
    component: UserAccountComponent,
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin-attendance',
    component: AdminAttendanceComponent,
  },
  {
    path: 'admin-experiences',
    component: AdminExperiencesComponent,
  }
];
