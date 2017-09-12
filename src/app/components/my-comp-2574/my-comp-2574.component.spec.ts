import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2574Component } from './my-comp-2574.component';

describe('MyComp2574Component', () => {
  let component: MyComp2574Component;
  let fixture: ComponentFixture<MyComp2574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
