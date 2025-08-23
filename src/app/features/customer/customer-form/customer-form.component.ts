import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerGetDTO } from '../customer-get-dto';
import { CustomerService } from '../customer.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomerPutDTO } from '../customer-put-dto';
import { CustomerPostDTO } from '../customer-post-dto';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-form',
  imports: [ReactiveFormsModule, ToolbarComponent],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  id: number = 0;
  customer?: CustomerGetDTO;
  customerForm!: FormGroup;
  isEditing: boolean = false;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      surname: ['', [Validators.required, Validators.maxLength(100)]],
      dui: ['', [Validators.required, Validators.maxLength(9)]],
      phone: ['', [Validators.required, Validators.maxLength(8)]],
      email: [null, [Validators.email]],
    });

    if (this.id) {
      this.isEditing = true;
      this.findById(this.id);
    } else {
      this.isEditing = false;
    }
  }

  findById(id: number) {
    this.customerService.findById(this.id).subscribe({
      next: (data) => {
        this.customer = data;
        console.log('Imprimiendo desde Form');
        console.log(data);
        this.customerForm.patchValue(data);
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    if (this.isEditing) {
      const dto: CustomerPutDTO = {
        id: this.id,
        ...this.customerForm.getRawValue(),
        updatedById: 1,
      };
      console.log('imprimimos desde edit');
      console.log(dto);

      this.customerService.update(this.id, dto).subscribe();
      this.router.navigate(['/customers']);
    } else {
      const dto: CustomerPostDTO = {
        ...this.customerForm.getRawValue(),
        createdById: 1,
      };
      this.customerService.create(dto).subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            iconColor: 'darkcyan',
            title: 'Cliente creado',
            text: 'Cliente creado satisfactoriamente con id: ' + response.id,
            confirmButtonText: 'OK',
            confirmButtonColor:' #0d9488'
          });
          this.router.navigate(['/customers']);
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            iconColor: ' #0d9488',
            title: 'Error al crear cliente',
            text: "Revisa consola",
            confirmButtonText: 'OK',
            confirmButtonColor: ' #0d9488'
          });
        },
      });
    }
  }
}
