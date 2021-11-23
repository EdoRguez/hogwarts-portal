import { Component, OnInit } from '@angular/core';
import { Character } from './interfaces/character.interface';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    
  }

  onSelectHouse(value: string): void {
    if(value) {
      this.characterService.getByHouseName(value).subscribe(
        (res: Character[]) => {
          this.characters = res;
        },
        err => {
          console.log('error');
          console.log(err);
        }
      );
    } else {
      this.characters = [];
    }
  }

}
