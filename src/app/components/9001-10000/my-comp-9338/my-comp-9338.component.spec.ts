import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9338Component } from './my-comp-9338.component';

describe('MyComp9338Component', () => {
  let component: MyComp9338Component;
  let fixture: ComponentFixture<MyComp9338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
