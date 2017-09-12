import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6712Component } from './my-comp-6712.component';

describe('MyComp6712Component', () => {
  let component: MyComp6712Component;
  let fixture: ComponentFixture<MyComp6712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
