import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9409Component } from './my-comp-9409.component';

describe('MyComp9409Component', () => {
  let component: MyComp9409Component;
  let fixture: ComponentFixture<MyComp9409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
