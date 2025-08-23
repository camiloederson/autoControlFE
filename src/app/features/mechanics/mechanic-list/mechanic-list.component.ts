import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../mechanic.service';
import { Router } from '@angular/router';
import { MechanicGetDTO } from '../mechanic-get-dto';
import Swal from 'sweetalert2';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mechanic-list',
  imports: [ToolbarComponent, NgClass],
  templateUrl: './mechanic-list.component.html',
  styleUrl: './mechanic-list.component.css',
})
export class MechanicListComponent implements OnInit {
  mechanicList: MechanicGetDTO[] = [];

  constructor(
    private mechanicService: MechanicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.mechanicService.findAll().subscribe({
      next: (data) => (this.mechanicList = data),
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: err,
        });
      },
    });
  }

  create() {
    this.router.navigate(['/mechanicForm']);
  }
}
