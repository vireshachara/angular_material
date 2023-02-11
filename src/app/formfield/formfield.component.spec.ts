import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldComponent } from './formfield.component';

describe('FormfieldComponent', () => {
  let component: FormfieldComponent;
  let fixture: ComponentFixture<FormfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
