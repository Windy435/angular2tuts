import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {
    getCrises(): Promise<Crisis[]> {
        return crisesPromise;
    }

    getCrisis(id: number | string){
        return crisesPromise
            .then(crises => crises.find(crisis=>crisis.id === +id));
    }
}