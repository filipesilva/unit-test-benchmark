import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7229Component } from './my-comp-7229.component';

describe('MyComp7229Component', () => {
  let component: MyComp7229Component;
  let fixture: ComponentFixture<MyComp7229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
