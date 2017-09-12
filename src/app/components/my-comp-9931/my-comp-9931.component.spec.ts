import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9931Component } from './my-comp-9931.component';

describe('MyComp9931Component', () => {
  let component: MyComp9931Component;
  let fixture: ComponentFixture<MyComp9931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
