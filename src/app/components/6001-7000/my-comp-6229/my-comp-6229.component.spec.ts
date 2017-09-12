import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6229Component } from './my-comp-6229.component';

describe('MyComp6229Component', () => {
  let component: MyComp6229Component;
  let fixture: ComponentFixture<MyComp6229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
