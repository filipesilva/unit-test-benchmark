import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2287Component } from './my-comp-2287.component';

describe('MyComp2287Component', () => {
  let component: MyComp2287Component;
  let fixture: ComponentFixture<MyComp2287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
