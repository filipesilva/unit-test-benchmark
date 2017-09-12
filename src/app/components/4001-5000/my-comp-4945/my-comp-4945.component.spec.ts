import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4945Component } from './my-comp-4945.component';

describe('MyComp4945Component', () => {
  let component: MyComp4945Component;
  let fixture: ComponentFixture<MyComp4945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
