import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2668Component } from './my-comp-2668.component';

describe('MyComp2668Component', () => {
  let component: MyComp2668Component;
  let fixture: ComponentFixture<MyComp2668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
