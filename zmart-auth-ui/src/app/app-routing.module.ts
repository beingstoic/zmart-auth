import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import { MerchantGuard } from './_helper/merchant.guard';
import { CustomerGuard } from './_helper/customer.guard';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { CustomerComponent } from './pages/customer/customer.component';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {path:'register', component:UserRegistrationComponent},
  {path:'merchant',
    component:MerchantComponent,
    canActivate: [MerchantGuard] },
  {path:'customer',
  component:CustomerComponent,
  canActivate: [CustomerGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
