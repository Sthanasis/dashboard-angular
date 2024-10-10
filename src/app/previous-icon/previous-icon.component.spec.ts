import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousIconComponent } from './previous-icon.component';

describe('PreviousIconComponent', () => {
  let component: PreviousIconComponent;
  let fixture: ComponentFixture<PreviousIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
