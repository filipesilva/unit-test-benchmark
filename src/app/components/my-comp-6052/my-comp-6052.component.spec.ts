import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6052Component } from './my-comp-6052.component';

describe('MyComp6052Component', () => {
  let component: MyComp6052Component;
  let fixture: ComponentFixture<MyComp6052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
