import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9257Component } from './my-comp-9257.component';

describe('MyComp9257Component', () => {
  let component: MyComp9257Component;
  let fixture: ComponentFixture<MyComp9257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
