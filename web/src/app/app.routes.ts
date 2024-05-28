import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UploadProfileComponent } from './pages/sign-up/upload-profile/upload-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
  // Landing page route. Do not add components inside the app
  // component other than the application router.
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'experience/:id',
    component: ExperienceComponent,
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
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-up/continue',
    component: UploadProfileComponent,
  },
  {
    path: 'sign-in',
    component: LoginComponent,
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
