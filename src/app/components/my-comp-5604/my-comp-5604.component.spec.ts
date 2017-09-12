import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5604Component } from './my-comp-5604.component';

describe('MyComp5604Component', () => {
  let component: MyComp5604Component;
  let fixture: ComponentFixture<MyComp5604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
