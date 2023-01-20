import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from '../model/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp: HttpClient) {

   }

  employeeUrl: string = "https://localhost:44372/api/Employee";
  designationUrl: string = 'https://localhost:44372/api/Designation';

  //To Get list of Data
  listOfEmployee: Employee[] = [];
  listOfDesignation: Designation[] = [];

  // Post or Inert Data
  employeeData: Employee = new Employee();

  saveEmployeeData()
  {
    return this.myhttp.post(this.employeeUrl, this.employeeData)
  }

  updateEmployeeData()
  {
    return this.myhttp.post(`${this.employeeUrl}/${this.employeeData.id}`, this.employeeData)
  }

  //observable return type
  getEmployess():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }

  getDesignation():Observable<Designation[]>
  {
    return this.myhttp.get<Designation[]>(this.designationUrl);
  }

  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);
  }

}
