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

    /*public getCocoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-coco-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }*/

    public getCocoPorAno(ano: number): Promise<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-coco-por-ano/${ano}`)
            .toPromise()
            .then((response: Response) => response)
            .catch(ErrorHandler.handlerError);
    }

    public getCocoPorMes(ano: number, mes: number): Promise<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-coco/${ano}/${mes}`)
            .toPromise()
            .then((response: Response) => response);
    }

    public getCriFlococoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-cri-flococo-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCriFlococoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-cri-flococo/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getOleoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-oleo-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getOleoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-oleo/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getTortaPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-torta-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getTortaPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-torta/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCocoGerminadoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-coco-germinado-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCocoGerminadoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-coco-germinado/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCaixaPadraoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-caixa-padrao-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCaixaPadraoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-caixa-padrao/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }



    public getAguaCocoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-agua-coco-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getAguaCocoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-agua-coco/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getFardoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-fardo-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getFardoPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-fardo/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCacambaPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-cacamba-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }

    public getCacambaPorMes(ano: number, mes: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-diario-cacamba/${ano}/${mes}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }
}
