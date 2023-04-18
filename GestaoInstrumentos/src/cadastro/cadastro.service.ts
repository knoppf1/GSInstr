import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient, private router: Router) {}

  // adicionar(data: any): Observable<any> {return this.http.post(environment.apiUrl + 'cadastro', data);
  // }

  // listar():Observable<any> {return this.http.get(environment.apiUrl + 'cadastro').pipe(

  //   tap(cadastros =>console.log('Res lista Favoritotos', cadastros))
  // );
  // }

  // delete(id: number): Observable<any> {
  //   console.log('deletando', id)
  //   return this.http.delete(environment.apiUrl + 'cadastro/'+id);
  // }

  // editar(id: number, data: any): Observable<any> {
  //   console.log('id',id);
  //   console.log('dados',data);
  //   return this.http.put(environment.apiUrl+'cadastro/'+id,data);
  // }

  // buscar(id: number): Observable<any> {
  //   return this.http.get(environment.apiUrl+'cadastro/'+id);
  // }

  adicionar(data: any): Observable<any> {
    console.log('Adicionar', data);
    return this.http.post(environment.apiUrl + 'Cadastro/new', data);
  }

  editar(id: number, data: any): Observable<any> {
    console.log('id', id);
    console.log('dados', data);
    return this.http.put(environment.apiUrl + 'Cadastro/update', data);
  }

  buscar(id: number): Observable<any> {
    console.log('Cheguei', id);
    return this.http.get(environment.apiUrl + 'Cadastro/get/' + id);
  }

  listar(): Observable<any> {
    return this.http.get(environment.apiUrl + 'cadastro/list/1');
  }

  listarAtivos(idEmpresa: number): Observable<any> {
    return this.http.get(
      environment.apiUrl + 'Cadastro/listAtivo/' + idEmpresa
    );
  }

  delete(id: number): Observable<any> {
    console.log('deletando', id);
    return this.http.delete(environment.apiUrl + 'Cadastro/delete/' + id);
  }
}
