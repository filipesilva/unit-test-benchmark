import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4229Component } from './my-comp-4229.component';

describe('MyComp4229Component', () => {
  let component: MyComp4229Component;
  let fixture: ComponentFixture<MyComp4229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
