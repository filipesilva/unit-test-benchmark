import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1400Component } from './my-comp-1400.component';

describe('MyComp1400Component', () => {
  let component: MyComp1400Component;
  let fixture: ComponentFixture<MyComp1400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
