import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { CaseComponent } from './components/case/case.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent},
    { path: 'call-center', component: CallCenterComponent },
    // { path: 'case', component: CaseComponent},
    // { path: 'opportunity', component: OpportunityComponent}
    {
      path: 'call-center',
      component: CallCenterComponent,
      children: [
        {
          path: 'case',
          loadComponent: () => import('./components/case/case.component').then(m => m.CaseComponent),
        },
        {
          path: 'opportunity',
          loadComponent: () => import('./components/opportunity/opportunity.component').then(m => m.OpportunityComponent),
          // path: 'opportunity', component: OpportunityComponent  // Eager loading
        },
        {
          path: 'quote',
          loadComponent: () => import('./components/quote/quote.component').then(m => m.QuoteComponent),
        },
        {
          path: 'service-appointments',
          loadComponent: () => import('./components/service-appointments/service-appointments.component').then(m => m.ServiceAppointmentsComponent),
        },
        {
          path: 'vendor-service-appointments',
          loadComponent: () => import('./components/vendor-service-appointments/vendor-service-appointments.component').then(m => m.VendorServiceAppointmentsComponent),
        }
      ],
    },
];
