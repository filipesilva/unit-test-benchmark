import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6081Component } from './my-comp-6081.component';

describe('MyComp6081Component', () => {
  let component: MyComp6081Component;
  let fixture: ComponentFixture<MyComp6081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
