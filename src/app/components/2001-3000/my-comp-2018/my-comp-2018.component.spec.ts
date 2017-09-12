import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2018Component } from './my-comp-2018.component';

describe('MyComp2018Component', () => {
  let component: MyComp2018Component;
  let fixture: ComponentFixture<MyComp2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
