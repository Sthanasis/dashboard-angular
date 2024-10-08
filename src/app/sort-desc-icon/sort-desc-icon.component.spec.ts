import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDescIconComponent } from './sort-desc-icon.component';

describe('SortDescIconComponent', () => {
  let component: SortDescIconComponent;
  let fixture: ComponentFixture<SortDescIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDescIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortDescIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
