import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class EmployeeService {
    private serverUrl = environment.url;
    constructor(private http: HttpClient){}

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.serverUrl}/employee/all`);
      }

    public addEmployee(employee: Employee): Observable<Employee>{
          return this.http.post<Employee>(`${this.serverUrl}/employee/add`,employee);
      }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.serverUrl}/employee/update`, employee);
      }
    
    public deleteEmployee(employeeId: number | undefined): Observable<void> {
        return this.http.delete<void>(`${this.serverUrl}/employee/delete/${employeeId}`);
      }
     
}