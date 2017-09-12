import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9989Component } from './my-comp-9989.component';

describe('MyComp9989Component', () => {
  let component: MyComp9989Component;
  let fixture: ComponentFixture<MyComp9989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
