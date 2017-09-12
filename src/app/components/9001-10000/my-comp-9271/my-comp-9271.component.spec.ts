import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9271Component } from './my-comp-9271.component';

describe('MyComp9271Component', () => {
  let component: MyComp9271Component;
  let fixture: ComponentFixture<MyComp9271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
