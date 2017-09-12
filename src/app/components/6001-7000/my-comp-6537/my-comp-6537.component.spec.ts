import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6537Component } from './my-comp-6537.component';

describe('MyComp6537Component', () => {
  let component: MyComp6537Component;
  let fixture: ComponentFixture<MyComp6537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
