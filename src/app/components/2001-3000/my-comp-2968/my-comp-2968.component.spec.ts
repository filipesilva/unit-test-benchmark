import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2968Component } from './my-comp-2968.component';

describe('MyComp2968Component', () => {
  let component: MyComp2968Component;
  let fixture: ComponentFixture<MyComp2968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
