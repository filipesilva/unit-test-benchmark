import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2413Component } from './my-comp-2413.component';

describe('MyComp2413Component', () => {
  let component: MyComp2413Component;
  let fixture: ComponentFixture<MyComp2413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
