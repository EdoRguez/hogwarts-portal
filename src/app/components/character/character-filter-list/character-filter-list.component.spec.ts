import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilterListComponent } from './character-filter-list.component';

describe('CharacterFilterListComponent', () => {
  let component: CharacterFilterListComponent;
  let fixture: ComponentFixture<CharacterFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterFilterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
