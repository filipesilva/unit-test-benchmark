import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1069Component } from './my-comp-1069.component';

describe('MyComp1069Component', () => {
  let component: MyComp1069Component;
  let fixture: ComponentFixture<MyComp1069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
