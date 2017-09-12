import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2969Component } from './my-comp-2969.component';

describe('MyComp2969Component', () => {
  let component: MyComp2969Component;
  let fixture: ComponentFixture<MyComp2969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
