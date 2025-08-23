import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleGetDTO } from '../vehicle-get-dto';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-vehicle-list',
  imports: [CommonModule, RouterLink, ToolbarComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent implements OnInit {
  vehicles: VehicleGetDTO[] = [];

  constructor(private vehicleService: VehicleService,
              private router : Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.vehicleService.findAll().subscribe(
      (data) => {
        this.vehicles = data;
        console.log(data);
        
      },
      (error) => {
        console.log('Fallando');
      }
    );
  }

  create() {
    this.router.navigate(['/vehicleForm']);
  }
}
