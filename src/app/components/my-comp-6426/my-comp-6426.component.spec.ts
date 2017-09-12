import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6426Component } from './my-comp-6426.component';

describe('MyComp6426Component', () => {
  let component: MyComp6426Component;
  let fixture: ComponentFixture<MyComp6426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
