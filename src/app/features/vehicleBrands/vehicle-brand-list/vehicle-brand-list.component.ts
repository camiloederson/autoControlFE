import { Component, OnInit } from '@angular/core';
import { VehicleBrandService } from '../vehicle-brand.service';
import { VehicleBrandGetDTO } from '../vehicle-brand-get-dto';
import { JsonPipe } from '@angular/common';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-brand-list',
  imports: [ToolbarComponent, RouterLink],
  templateUrl: './vehicle-brand-list.component.html',
  styleUrl: './vehicle-brand-list.component.css',
})
export class VehicleBrandListComponent implements OnInit {
  constructor(private vehicleBrandService: VehicleBrandService) {}

  vehicleBrandList: VehicleBrandGetDTO[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.vehicleBrandService.findAll().subscribe(
      (data) => (this.vehicleBrandList = data),
      (error) => console.log('Fallando en el findAll')
    );
  }
}
