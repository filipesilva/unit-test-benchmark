import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp760Component } from './my-comp-760.component';

describe('MyComp760Component', () => {
  let component: MyComp760Component;
  let fixture: ComponentFixture<MyComp760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
