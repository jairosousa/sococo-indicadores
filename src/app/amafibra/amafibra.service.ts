import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { ErrorHandler } from '../ErrorHandler';
import { Amafibra } from './amafibra.model';

@Injectable()
export class AmafibraService {

    private amafibraUrl;

    constructor(private http: Http
    ) {
        this.amafibraUrl = `${environment.base_url}/amafibra`
    }

    public adicionar(amafibra: Amafibra): Observable<any> {
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json')
        return this.http.post(
            this.amafibraUrl,
            JSON.stringify(amafibra),
            new RequestOptions({ headers: headers })
        )
            .map((response: Response) => response.json())
    }

    public getLista(): Observable<Amafibra[]> {
        return this.http.get(this.amafibraUrl)
            .map((resposta: Response) => resposta.json())
            .catch(ErrorHandler.handlerError)
    }

}
