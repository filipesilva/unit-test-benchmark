import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp747Component } from './my-comp-747.component';

describe('MyComp747Component', () => {
  let component: MyComp747Component;
  let fixture: ComponentFixture<MyComp747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
