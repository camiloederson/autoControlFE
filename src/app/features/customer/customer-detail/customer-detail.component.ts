import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerGetDTO } from '../customer-get-dto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
    selector: 'app-customer-detail',
    imports: [RouterLink, ToolbarComponent],
    templateUrl: './customer-detail.component.html',
    styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {
    
constructor(private customerService : CustomerService,
            private route: ActivatedRoute
){}

id : number = 0 ;
customer? : CustomerGetDTO;

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));  
        this.findById(this.id);
    }

    
    findById(id : number) {
        this.customerService.findById(id).subscribe
            ({
                next: (data) => {
                    this.customer = data;
                    console.log(this.customer);
                }  
            })
        
    }
}
