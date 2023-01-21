import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(public empService: EmployeeService){}

  ngOnInit() {
    this.empService.getEmployeesData().subscribe(data=>{
      this.empService.listOfEmployee = data;
      console.log(this.empService.listOfEmployee);
    });
  }

  editEmployee(editEmployeeObject: Employee)
  {
    console.log(editEmployeeObject);
  }

}
