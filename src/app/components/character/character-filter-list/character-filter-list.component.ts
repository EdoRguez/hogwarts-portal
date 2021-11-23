import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-filter-list',
  templateUrl: './character-filter-list.component.html',
  styleUrls: ['./character-filter-list.component.scss']
})
export class CharacterFilterListComponent implements OnInit {

  @Output() selectHouseClick= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption(value: string): void {
    this.selectHouseClick.next(value);
  }

}
