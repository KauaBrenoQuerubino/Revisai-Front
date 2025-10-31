import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDacksComponent } from './edit-dacks.component';

describe('EditDacksComponent', () => {
  let component: EditDacksComponent;
  let fixture: ComponentFixture<EditDacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDacksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
