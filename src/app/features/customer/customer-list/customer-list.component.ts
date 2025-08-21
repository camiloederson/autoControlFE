import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerGetDTO } from '../customer-get-dto';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, TableModule, RouterLink, ToolbarComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  customers: CustomerGetDTO[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.customerService.findAll().subscribe({
      next: (data) => {
        this.customers = data;
        console.log('Customers fetched successfully:', this.customers);
      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      },
    });
  }

  create() {
    this.router.navigate(['/customerForm']);
  }
}
