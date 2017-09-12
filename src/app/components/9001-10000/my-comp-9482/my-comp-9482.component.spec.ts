import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9482Component } from './my-comp-9482.component';

describe('MyComp9482Component', () => {
  let component: MyComp9482Component;
  let fixture: ComponentFixture<MyComp9482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
