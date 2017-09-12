import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7069Component } from './my-comp-7069.component';

describe('MyComp7069Component', () => {
  let component: MyComp7069Component;
  let fixture: ComponentFixture<MyComp7069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
