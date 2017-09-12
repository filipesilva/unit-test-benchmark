import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp322Component } from './my-comp-322.component';

describe('MyComp322Component', () => {
  let component: MyComp322Component;
  let fixture: ComponentFixture<MyComp322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
