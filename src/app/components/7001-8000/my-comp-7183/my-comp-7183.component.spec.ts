import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7183Component } from './my-comp-7183.component';

describe('MyComp7183Component', () => {
  let component: MyComp7183Component;
  let fixture: ComponentFixture<MyComp7183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
