import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6662Component } from './my-comp-6662.component';

describe('MyComp6662Component', () => {
  let component: MyComp6662Component;
  let fixture: ComponentFixture<MyComp6662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
