import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp604Component } from './my-comp-604.component';

describe('MyComp604Component', () => {
  let component: MyComp604Component;
  let fixture: ComponentFixture<MyComp604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
