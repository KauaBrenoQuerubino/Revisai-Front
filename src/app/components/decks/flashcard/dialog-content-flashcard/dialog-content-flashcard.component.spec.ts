import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentFlashcardComponent } from './dialog-content-flashcard.component';

describe('DialogContentFlashcardComponent', () => {
  let component: DialogContentFlashcardComponent;
  let fixture: ComponentFixture<DialogContentFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContentFlashcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
