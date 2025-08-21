import { Routes } from '@angular/router';
import { CustomerListComponent } from './features/customer/customer-list/customer-list.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MechanicListComponent } from './features/mechanics/mechanic-list/mechanic-list.component';
import { PaymentListComponent } from './features/payments/payment-list/payment-list.component';
import { PaymentStatusListComponent } from './features/paymentStatuses/payment-status-list/payment-status-list.component';
import { PaymentTypeListComponent } from './features/paymentTypes/payment-type-list/payment-type-list.component';
import { SparePartBrandListComponent } from './features/sparePartBrands/spare-part-brand-list/spare-part-brand-list.component';
import { SparePartCategoryListComponent } from './features/sparePartCategories/spare-part-category-list/spare-part-category-list.component';
import { SparePartListComponent } from './features/spareParts/spare-part-list/spare-part-list.component';
import { SparePartUsedListComponent } from './features/sparePartUsed/spare-part-used-list/spare-part-used-list.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { VehicleBrandListComponent } from './features/vehicleBrands/vehicle-brand-list/vehicle-brand-list.component';
import { VehicleStatusListComponent } from './features/vehicleStatuses/vehicle-status-list/vehicle-status-list.component';
import { OrderRepairListComponent } from './features/orders/order-repair-list/order-repair-list.component';
import { VehicleListComponent } from './features/vehicles/vehicle-list/vehicle-list.component';
import { VehicleBrandDetailComponent } from './features/vehicleBrands/vehicle-brand-detail/vehicle-brand-detail.component';
import { CustomerDetailComponent } from './features/customer/customer-detail/customer-detail.component';
import { CustomerFormComponent } from './features/customer/customer-form/customer-form.component';

export const routes: Routes = [
    {path: 'customers', component: CustomerListComponent },
    {path: 'customerDetails/:id', component: CustomerDetailComponent},
    {path: 'customerForm', component: CustomerFormComponent},
    {path: 'customerForm/:id', component: CustomerFormComponent},
    {path: 'mechanics', component: MechanicListComponent},
    {path: 'payments', component: PaymentListComponent},
    {path: 'paymentStatuses', component: PaymentStatusListComponent},
    {path: 'paymentTypes', component: PaymentTypeListComponent },
    {path: 'sparePartBrands', component: SparePartBrandListComponent},
    {path: 'sparePartCategories', component: SparePartCategoryListComponent},
    {path: 'spareParts', component: SparePartListComponent},
    {path: 'sparePartsUsed', component: SparePartUsedListComponent},
    {path: 'users', component: UserListComponent},
    {path: 'vehicles', component: VehicleListComponent},
    {path: 'vehicleBrands', component: VehicleBrandListComponent},
    {path: 'vehicleBrands/:id', component: VehicleBrandDetailComponent},
    {path: 'vehicleStatuses', component: VehicleStatusListComponent},
    {path: 'orders', component: OrderRepairListComponent}
];
