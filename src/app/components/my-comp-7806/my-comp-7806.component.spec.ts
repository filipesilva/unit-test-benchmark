import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7806Component } from './my-comp-7806.component';

describe('MyComp7806Component', () => {
  let component: MyComp7806Component;
  let fixture: ComponentFixture<MyComp7806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
