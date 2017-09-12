import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4974Component } from './my-comp-4974.component';

describe('MyComp4974Component', () => {
  let component: MyComp4974Component;
  let fixture: ComponentFixture<MyComp4974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
