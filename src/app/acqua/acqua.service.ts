import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { ErrorHandler } from '../ErrorHandler';
import { Acqua } from './acqua.model';

@Injectable()
export class AcquaService {

  private acquaUrl;

  constructor(
    private http: Http
  ) {
    this.acquaUrl = `${environment.base_url}/acqua`
   }

  public adicionar(acqua: Acqua): Observable<any> {
    let headers: Headers = new Headers();
    headers.append('Content-type', 'application/json')
    return this.http.post(
      this.acquaUrl,
      JSON.stringify(acqua),
      new RequestOptions({ headers: headers })
    )
    .map((response: Response) => response.json())
  }

  public getLista(): Observable<Acqua[]> {
    return this.http.get(this.acquaUrl)
      .map((resposta: Response) => resposta.json())
      .catch(ErrorHandler.handlerError)
  }

}
