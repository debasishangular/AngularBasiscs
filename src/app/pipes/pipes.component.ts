import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Person } from '../models/person';
import { NewCompany } from '../models/newcompany';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  message = 'Hello World!';
  person = new Person('Mahesh', new Date(1980, 3, 12));
  company = new Company('PQR', this.person);

  myArray = [1, 2, 3, 4, 5];

  // For division Pipe
dividend = 23;
divisor = 7;

 // For pure and impure pipe
 compName = 'ABCD LTD';
 compLocation = 'Varanasi';
 company1 = new NewCompany(this.compName, this.compLocation);
  constructor() { }


  ngOnInit() {
  }


   // Impure change because there is no change in object reference: company	
  // Impure pipe will run again and Pure pipe will do nothing.
 updateCompany() {
     this.company1.cname = this.compName;
     this.company1.location = this.compLocation;
 }

  // Pure change because there is change in object reference: company
  // Impure pipe and Pure pipe both will run again.
 createCompany() {
     this.company1 = new NewCompany(this.compName, this.compLocation);
 }

}
