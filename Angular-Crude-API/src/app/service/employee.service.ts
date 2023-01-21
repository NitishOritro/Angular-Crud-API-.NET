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

  //employeeUrl: string = "https://localhost:44372/api/Employee";
  employeeUrl: string = "https://mocki.io/v1/b86a6eeb-fa4b-4f42-aff7-db444884333b";
  designationUrl: string = 'https://localhost:44372/api/Designation';

  baseUrl: string = "/api/employee";

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
  getEmployeesData():Observable<Employee[]>
  {
    //return this.myhttp.get<Employee[]>(this.employeeUrl);
    return this.myhttp.get<Employee[]>(this.baseUrl);
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
