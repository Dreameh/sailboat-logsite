import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindHeadingComponent } from './wind-heading.component';

describe('WindHeadingComponent', () => {
  let component: WindHeadingComponent;
  let fixture: ComponentFixture<WindHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
