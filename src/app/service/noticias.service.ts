import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "http://localhost:3000/noticias"

  constructor(private httpclient: HttpClient) { }

  getNoticias(): Observable<Noticia[]>{
    return this.httpclient.get<Noticia[]>(this.url)
  }
}