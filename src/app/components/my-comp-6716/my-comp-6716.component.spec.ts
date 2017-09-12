import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6716Component } from './my-comp-6716.component';

describe('MyComp6716Component', () => {
  let component: MyComp6716Component;
  let fixture: ComponentFixture<MyComp6716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
