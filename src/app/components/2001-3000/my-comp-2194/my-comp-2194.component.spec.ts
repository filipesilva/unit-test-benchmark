import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2194Component } from './my-comp-2194.component';

describe('MyComp2194Component', () => {
  let component: MyComp2194Component;
  let fixture: ComponentFixture<MyComp2194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
