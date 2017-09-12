import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2426Component } from './my-comp-2426.component';

describe('MyComp2426Component', () => {
  let component: MyComp2426Component;
  let fixture: ComponentFixture<MyComp2426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
