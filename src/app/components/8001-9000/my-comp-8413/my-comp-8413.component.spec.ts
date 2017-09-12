import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8413Component } from './my-comp-8413.component';

describe('MyComp8413Component', () => {
  let component: MyComp8413Component;
  let fixture: ComponentFixture<MyComp8413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
