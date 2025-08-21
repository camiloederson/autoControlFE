import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean; // controla si los subitems están visibles
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule]
})
export class SidebarComponent {
  // Controla si el sidebar está abierto o cerrado
  @Input() isOpen: boolean = true;
  @Output() isOpenChange = new EventEmitter<boolean>();

  // Menú dinámico
  menu: MenuItem[] = [
    { icon: 'bi-people', label: 'Clientes' },
    { icon: 'bi-person-workspace', label: 'Mecánicos' },
    { 
      icon: 'bi-car-front', 
      label: 'Vehículos', 
      children: [
        { icon: 'bi-circle', label: 'Marcas' },
        { icon: 'bi-circle', label: 'Modelos' },
        { icon: 'bi-circle', label: 'Tipos' }
      ]
    },
    { 
      icon: 'bi-tools', 
      label: 'Órdenes', 
      children: [
        { icon: 'bi-circle', label: 'Pendientes' },
        { icon: 'bi-circle', label: 'Completadas' }
      ]
    },
    { icon: 'bi-box', label: 'Repuestos' },
    { icon: 'bi-cash-stack', label: 'Pagos' },
    { icon: 'bi-graph-up', label: 'Reportes' },
    { icon: 'bi-gear', label: 'Configuración' }
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
