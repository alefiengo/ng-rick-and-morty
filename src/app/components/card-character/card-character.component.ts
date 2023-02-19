import { MessageService } from './../../services/message.service';
import { Character } from './../../models/character';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent {

  @Input() character!: Character;
  selectedCharacter!: Character;

  constructor(private messageService: MessageService) { }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
    this.messageService.add(`CharactersComponent: Selected character id=${character.id}, name=${character.name}`);
  }

}
