import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9671Component } from './my-comp-9671.component';

describe('MyComp9671Component', () => {
  let component: MyComp9671Component;
  let fixture: ComponentFixture<MyComp9671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
