import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7315Component } from './my-comp-7315.component';

describe('MyComp7315Component', () => {
  let component: MyComp7315Component;
  let fixture: ComponentFixture<MyComp7315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
