import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerGetDTO } from '../customer-get-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  customers : CustomerGetDTO[] = [];

  ngOnInit(): void {   
    this.findAll();// Initialization logic can go here
  }

  findAll (){
    this.customerService.findAll().subscribe({
      next: (data) => {
        this.customers = data;
        console.log('Customers fetched successfully:', this.customers);
        
      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      }
    });
  }// Additional methods for handling customer data can be added here
}
