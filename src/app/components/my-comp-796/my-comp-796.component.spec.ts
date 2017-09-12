import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp796Component } from './my-comp-796.component';

describe('MyComp796Component', () => {
  let component: MyComp796Component;
  let fixture: ComponentFixture<MyComp796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
