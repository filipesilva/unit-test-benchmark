import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9561Component } from './my-comp-9561.component';

describe('MyComp9561Component', () => {
  let component: MyComp9561Component;
  let fixture: ComponentFixture<MyComp9561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
