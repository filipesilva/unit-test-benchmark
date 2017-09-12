import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4338Component } from './my-comp-4338.component';

describe('MyComp4338Component', () => {
  let component: MyComp4338Component;
  let fixture: ComponentFixture<MyComp4338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
