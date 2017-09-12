import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6984Component } from './my-comp-6984.component';

describe('MyComp6984Component', () => {
  let component: MyComp6984Component;
  let fixture: ComponentFixture<MyComp6984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
