import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2334Component } from './my-comp-2334.component';

describe('MyComp2334Component', () => {
  let component: MyComp2334Component;
  let fixture: ComponentFixture<MyComp2334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
