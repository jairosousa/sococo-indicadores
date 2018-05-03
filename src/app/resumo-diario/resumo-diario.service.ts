import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

import { ErrorHandler } from '../ErrorHandler';
import { ResumoDiario } from './resumo-diario.model';


@Injectable()
export class ResumoDiarioService {

    private resumoDiarioUrl;

    constructor(private http: Http) {
        this.resumoDiarioUrl = `${environment.base_url}/resumo-diario`;
    }

    public adicionar(resumoDiario: ResumoDiario): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/json')
        return this.http.post(
            this.resumoDiarioUrl,
            JSON.stringify(resumoDiario),
            new RequestOptions({ headers: headers })
        )
            .map((response: Response) => response.json());
    }

    public getLista(): Observable<ResumoDiario[]> {
        return this.http.get(this.resumoDiarioUrl)
            .map((resposta: Response) => resposta.json())
            .catch(ErrorHandler.handlerError);
    }

    public getCocoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-cocos/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCriFlococoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-cri-flococo/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getOleoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-oleos/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }
}
