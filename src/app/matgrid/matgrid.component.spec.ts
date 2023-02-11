import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatgridComponent } from './matgrid.component';

describe('MatgridComponent', () => {
  let component: MatgridComponent;
  let fixture: ComponentFixture<MatgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
