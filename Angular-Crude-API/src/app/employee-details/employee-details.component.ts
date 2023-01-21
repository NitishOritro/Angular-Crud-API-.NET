import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(public empService: EmployeeService, public datepipe: DatePipe){}

  ngOnInit() {
    this.empService.getEmployeesData().subscribe(data=>{
      this.empService.listOfEmployee = data;
      console.log(this.empService.listOfEmployee);
    });
  }

  editEmployee(editEmployeeObject: Employee)
  {
    console.log("Edit Employee Data");
    console.log(editEmployeeObject);

    let df = this.datepipe.transform(editEmployeeObject.doj, 'yyyy-MM-dd');
    editEmployeeObject.doj = df;
    this.empService.employeeData = editEmployeeObject;

  }

}
