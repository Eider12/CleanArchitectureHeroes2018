import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { Heroe } from '../domain/Heroes/heroes.model';
import { HeroesRepository } from '../repositories/heroes.repositories';




@Injectable({
    providedIn: 'root'
})

//export class GetHeroesUseCase {
export class GetHeroesUseCase implements UseCase<void, Heroe> {

    constructor( private heroesRepository:  HeroesRepository){}

    execute(params: void): Observable<Heroe[]> {
        return this.heroesRepository.getHeroes();
    }
}