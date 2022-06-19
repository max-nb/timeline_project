import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  endpointApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  listProjects(){
    return this.http.get<any>(`${this.endpointApi}/projects`);
  }

  saveProject(body){
    return this.http.post<any>(`${this.endpointApi}/projects`, body);
  }

  getProjectById(gitUser, repoName){

    return this.http.get<any>(`${this.endpointApi}/projects/${gitUser}/${repoName}`);
  }

  getFileTest(gitUser, repoName){
    return this.http.get<any>(`${this.endpointApi}/submission/${gitUser}/${repoName}`,{responseType: 'blob' as 'json'});
  }

  getHistoryTest(gitUser, repoName){
    return this.http.get<any>(`${this.endpointApi}/history/${gitUser}/${repoName}`);
  }

  getStatusTest(gitUser, repoName, id){
    return this.http.get<any>(`${this.endpointApi}/history/${gitUser}/${repoName}/${id}`);
  }

  getLogTest(gitUser, repoName, id){
    return this.http.get<any>(`${this.endpointApi}/history/${gitUser}/${repoName}/${id}/log`, {responseType: 'blob' as 'json'});
  }

  getLogTestUser(gitUser, repoName, id){
    return this.http.get<any>(`${this.endpointApi}/history/${gitUser}/${repoName}/${id}/log/user`);
  }

  getLogTestApp(gitUser, repoName, id){
    return this.http.get<any>(`${this.endpointApi}/history/${gitUser}/${repoName}/${id}/log/app`);
  }

  submitTest(gitUser, repoName, formData){
    return this.http.post<any>(`${this.endpointApi}/submission/${gitUser}/${repoName}`, formData);
  }
    
}
