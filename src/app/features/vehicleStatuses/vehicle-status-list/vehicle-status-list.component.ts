import { Component } from '@angular/core';
import { VehicleStatusService } from '../vehicle-status.service';
import { VehicleStatusGetDTO } from '../vehicleStatus-get-dt';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-status-list',
  imports: [ToolbarComponent, RouterLink],
  templateUrl: './vehicle-status-list.component.html',
  styleUrl: './vehicle-status-list.component.css',
})
export class VehicleStatusListComponent {
  vehicleStatuses: VehicleStatusGetDTO[] = [];

  constructor(private vehicleStatusService: VehicleStatusService) {}

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.vehicleStatusService.findAll().subscribe({
      next: (data) => (this.vehicleStatuses = data),
      error: (err) => console.error(err),
    });
  }

  create() {
    // Navegar a formulario de creación
  }
}
