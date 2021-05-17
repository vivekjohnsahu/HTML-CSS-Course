import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogurtComponent } from './yogurt.component';

describe('YogurtComponent', () => {
  let component: YogurtComponent;
  let fixture: ComponentFixture<YogurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
