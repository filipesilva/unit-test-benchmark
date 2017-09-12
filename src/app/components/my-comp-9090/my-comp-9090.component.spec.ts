import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9090Component } from './my-comp-9090.component';

describe('MyComp9090Component', () => {
  let component: MyComp9090Component;
  let fixture: ComponentFixture<MyComp9090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
