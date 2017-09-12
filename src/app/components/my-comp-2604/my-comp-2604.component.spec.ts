import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2604Component } from './my-comp-2604.component';

describe('MyComp2604Component', () => {
  let component: MyComp2604Component;
  let fixture: ComponentFixture<MyComp2604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
