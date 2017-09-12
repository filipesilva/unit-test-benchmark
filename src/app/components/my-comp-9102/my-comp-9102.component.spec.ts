import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9102Component } from './my-comp-9102.component';

describe('MyComp9102Component', () => {
  let component: MyComp9102Component;
  let fixture: ComponentFixture<MyComp9102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
