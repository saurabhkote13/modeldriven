import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class CrudService {
    constructor(private http: HttpClient) { }
    public GetHttpData() {
        return this.http.get('https://reqres.in/api/users?page=2')
    }
    public PostHttpData(data: any) {
        return this.http.post('https://reqres.in/api/users', data)
    }
    public PutHttpData(data: any) {
        return this.http.put('https://reqres.in/api/users/2', data)
    }
    public DeleteHttpData() {
        return this.http.delete('https://reqres.in/api/users/2')
    }

}