import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignationdataService {

    constructor(private http: HttpClient) { }

    // private mobUrl = 'api/desig';
    SERVER_URL: string = 'https://8bb9e835.ngrok.io/api/Settings/GetDesignations';
    SERVER_URL_ADD: string ='https://8bb9e835.ngrok.io/api/Settings/InsUpdateDesignation';
    // SERVER_URL3: string = 'https://8bb9e835.ngrok.io/api/Settings/GetDesignationsDetails?DesignationId={DesignationId}';

    // public getDesignations() {
    // return this.http.get(this.SERVER_URL);
    // }

    public getDesignationById(id) {
    return this.http.get(this.SERVER_URL+ id);
    }

    public deleteDesignation(designationID) {
    // let head = new HttpHeaders().set("Content-Type", "application/json");
    console.log('how it is getting ID?:' + designationID);
    // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
    return this.http.delete(this.SERVER_URL + designationID);
    }

    public addDesignation(f) {
    console.log(f);
    console.log(JSON.stringify(f));
    let body = JSON.stringify(f);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.SERVER_URL_ADD, body, {headers: head});

    }


    editDesignation(Id, item) {
    console.log(Id);
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.SERVER_URL + Id, body, { headers: head });
    }


    // end


    // getDesignations(): Observable<Designation[]> {
    // return this.http.get<Designation[]>(this.mobUrl).pipe(
    // tap(data => console.log(data)),
    // catchError(this.handleError)
    // );
    // }

    // getDesignation(id: number): Observable<Designation> {
    // const url = `${this.mobUrl}/${id}`;
    // return this.http.get<Designation>(url).pipe(
    // catchError(this.handleError)
    // );
    // }

    // updateDesignation(desig: Designation): Observable<Designation> {
    // const url = `${this.mobUrl}/${desig.Id}`;
    // return this.http.put<Designation>(this.mobUrl, desig).pipe(
    // map(() => desig),
    // catchError(this.handleError)
    // );
}
