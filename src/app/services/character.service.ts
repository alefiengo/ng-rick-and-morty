import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CharacterResult } from '../models/character';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCharacters(): Observable<CharacterResult> {
    return this.http.get<CharacterResult>(this.characterUrl)
      .pipe(
        tap(_ => this.messageService.add('CharacterService: Fetched characters')),
        catchError(this.handleError<CharacterResult>('getCharacters'))
      );
  }

  getCharactersByStatus(status: string): Observable<CharacterResult> {
    return this.http.get<CharacterResult>(this.characterUrl + "/?status=" + status)
      .pipe(
        tap(character => {
          const statusText = status == '' ? 'All' : status;
          character.results.length ? 
          this.messageService.add('CharacterService: Fetched characters by status: ' + statusText) :
          this.messageService.add('CharacterService: no characters matching status: ' + statusText)
        }),
        catchError(this.handleError<CharacterResult>('getCharacters'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CharacterService: ${message}`);
  }
}