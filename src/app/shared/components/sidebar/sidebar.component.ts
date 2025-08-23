import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, RouterLink],
})
export class SidebarComponent {
  @Input() isOpen: boolean = true;
  @Output() isOpenChange = new EventEmitter<boolean>();

menu: MenuItem[] = [
  // Clientes
  { icon: 'bi-people', label: 'Clientes', route: '/customers' },

  // Mecánicos
  { icon: 'bi-person-workspace', label: 'Mecánicos', route: '/mechanics' },

  // Vehículos
  {
    icon: 'bi-car-front',
    label: 'Vehículos',
    children: [
      { icon: 'bi-list', label: 'Listado', route: '/vehicles' },
      { icon: 'bi-shield', label: 'Marcas', route: '/vehicleBrands' },
      { icon: 'bi bi-bounding-box-circles', label: 'Estados', route: '/vehicleStatuses' },
    ],
    route: '/vehicles', // Link principal a listado
  },

  // Órdenes de reparación
  {
    icon: 'bi-tools',
    label: 'Órdenes',
    route: '/orders',
  },

  // Repuestos
  {
    icon: 'bi-box',
    label: 'Repuestos',
    children: [
      { icon: 'bi-list', label: 'Listado', route: '/spareParts' },
      { icon: 'bi-tags', label: 'Marcas', route: '/sparePartBrands' },
      { icon: 'bi-grid', label: 'Categorías', route: '/sparePartCategories' },
      { icon: 'bi-box-arrow-in-down', label: 'Usados', route: '/sparePartsUsed' },
    ],
    route: '/spareParts',
  },

  // Pagos
  {
    icon: 'bi-cash-stack',
    label: 'Pagos',
    children: [
      { icon: 'bi-list', label: 'Listado', route: '/payments' },
      { icon: 'bi-clipboard-check', label: 'Estados', route: '/paymentStatuses' },
      { icon: 'bi-credit-card', label: 'Tipos', route: '/paymentTypes' },
    ],
    route: '/payments',
  },

  // Usuarios
  { icon: 'bi-person-badge', label: 'Usuarios', route: '/users' },

  // Reportes
  { icon: 'bi-graph-up', label: 'Reportes', route: '' },

  // Configuración
  { icon: 'bi-gear', label: 'Configuración', route: '' },
];


  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

  toggleSubmenu(item: MenuItem) {
    item.isOpen = !item.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Si el ancho es menor a 768px, colapsar automáticamente
    if (window.innerWidth < 768 && this.isOpen) {
      this.isOpen = false;
      this.isOpenChange.emit(this.isOpen);
    }

    // Si el ancho es mayor o igual a 768px y estaba cerrado, abrir
    if (window.innerWidth >= 768 && !this.isOpen) {
      this.isOpen = true;
      this.isOpenChange.emit(this.isOpen);
    }
  }
}
