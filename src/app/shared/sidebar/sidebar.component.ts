// sidebar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink],
  standalone: true
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'bi bi-speedometer2' },
    { label: 'Customers', route: '/customers', icon: 'bi bi-person' },
    { label: 'Vehicles', route: '/vehicles', icon: 'bi bi-truck' },
    { label: 'Repair Orders', route: '/repair-orders', icon: 'bi bi-tools' },
    { label: 'Payments', route: '/payments', icon: 'bi bi-credit-card' },
    { label: 'Spare Parts', route: '/spare-parts', icon: 'bi bi-box' },
    { label: 'Users', route: '/users', icon: 'bi bi-people' },
  ];
}
