import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6671Component } from './my-comp-6671.component';

describe('MyComp6671Component', () => {
  let component: MyComp6671Component;
  let fixture: ComponentFixture<MyComp6671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
