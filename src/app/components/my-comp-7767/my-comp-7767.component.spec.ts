import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7767Component } from './my-comp-7767.component';

describe('MyComp7767Component', () => {
  let component: MyComp7767Component;
  let fixture: ComponentFixture<MyComp7767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
