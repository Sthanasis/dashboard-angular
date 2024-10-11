import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAscIconComponent } from './sort-asc-icon.component';

describe('SortAscIconComponent', () => {
  let component: SortAscIconComponent;
  let fixture: ComponentFixture<SortAscIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortAscIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortAscIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
