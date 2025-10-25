import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentColecaoComponent } from './dialog-content-colecao.component';

describe('DialogContentColecaoComponent', () => {
  let component: DialogContentColecaoComponent;
  let fixture: ComponentFixture<DialogContentColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContentColecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
