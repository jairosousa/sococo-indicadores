import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Sococo } from './sococo.model';

@Injectable()
export class SococoService {

    private sococoUrl

    constructor(
        private http: Http
    ) {
        this.sococoUrl = `${environment.base_url}/sococo`
    }

    public adicionar(sococo: Sococo): Observable<number> {
        return this.http.post(this.sococoUrl, JSON.stringify(sococo))
            .map(response => response.json())
            .map((sococo) => sococo.id)
    }

    public getLista(): Promise<Sococo[]> {
        return this.http.get(this.sococoUrl)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

}