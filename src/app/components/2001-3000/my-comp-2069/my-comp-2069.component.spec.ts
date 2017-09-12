import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2069Component } from './my-comp-2069.component';

describe('MyComp2069Component', () => {
  let component: MyComp2069Component;
  let fixture: ComponentFixture<MyComp2069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
