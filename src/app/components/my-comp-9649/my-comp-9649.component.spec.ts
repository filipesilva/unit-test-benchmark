import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9649Component } from './my-comp-9649.component';

describe('MyComp9649Component', () => {
  let component: MyComp9649Component;
  let fixture: ComponentFixture<MyComp9649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
