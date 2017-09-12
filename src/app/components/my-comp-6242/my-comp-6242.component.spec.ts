import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6242Component } from './my-comp-6242.component';

describe('MyComp6242Component', () => {
  let component: MyComp6242Component;
  let fixture: ComponentFixture<MyComp6242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
