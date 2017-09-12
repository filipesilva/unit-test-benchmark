import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8287Component } from './my-comp-8287.component';

describe('MyComp8287Component', () => {
  let component: MyComp8287Component;
  let fixture: ComponentFixture<MyComp8287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
