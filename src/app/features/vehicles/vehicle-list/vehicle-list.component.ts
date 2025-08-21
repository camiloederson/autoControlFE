import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleGetDTO } from '../vehicle-get-dto';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  imports: [JsonPipe, CommonModule
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements   OnInit {

  vehicleList : VehicleGetDTO[] = [];

  constructor(private vehicleService : VehicleService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.vehicleService.findAll().subscribe(
      (data) => {
        this.vehicleList = data;
      },
      (error) => {
        console.log('Fallando');        
      }
    )
  }

}
