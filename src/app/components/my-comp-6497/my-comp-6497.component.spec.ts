import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6497Component } from './my-comp-6497.component';

describe('MyComp6497Component', () => {
  let component: MyComp6497Component;
  let fixture: ComponentFixture<MyComp6497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
