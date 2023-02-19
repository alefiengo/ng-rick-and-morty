import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterResult, Character } from './../../models/character';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  characterList?: CharacterResult;
  info?: Info;
  characters?: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characterList => {
      if(characterList) {
        this.characterList = characterList;
        this.info = characterList.info;
        this.characters = characterList.results;
      }
    });
  }

  getCharactersByStatus(status: string): void {
    this.characterService.getCharactersByStatus(status)
    .subscribe(characterList => {
      if(characterList) {
        this.characterList = characterList;
        this.info = characterList.info;
        this.characters = characterList.results;
      }
    });
  }
}
