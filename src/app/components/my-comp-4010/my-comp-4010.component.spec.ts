import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4010Component } from './my-comp-4010.component';

describe('MyComp4010Component', () => {
  let component: MyComp4010Component;
  let fixture: ComponentFixture<MyComp4010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
