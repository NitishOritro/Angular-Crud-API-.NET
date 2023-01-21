import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  constructor(public empService: EmployeeService){ }


  submit(myForm: NgForm)
  {
    console.log(myForm.value);
    if(this.empService.employeeData.id < 5)
      this.insertEmployee(myForm);
     else
     this.updateEmployee(myForm);
  }

  insertEmployee(myForm: NgForm)
  {
    this.empService.saveEmployeeData().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshData();
      console.log("Data Save Successfully");
    });
  }

  updateEmployee(myForm: NgForm)
  {
    this.empService.updateEmployeeData().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshData();
      console.log("Data Updated Successfully");
    });

  }

  resetForm(myForm: NgForm)
  {
    myForm.form.reset();
    this.empService.employeeData = new Employee();
  }

  refreshData()
  {
    this.empService.getEmployeesData().subscribe(res=> {
      console.log("List Of Employee Data object");
      console.log(this.empService.listOfEmployee);

      this.empService.listOfEmployee=res;
      console.log(this.empService.listOfEmployee);
    });
  }

}
