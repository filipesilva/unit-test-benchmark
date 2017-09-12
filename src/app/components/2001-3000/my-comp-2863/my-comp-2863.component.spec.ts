import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2863Component } from './my-comp-2863.component';

describe('MyComp2863Component', () => {
  let component: MyComp2863Component;
  let fixture: ComponentFixture<MyComp2863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
