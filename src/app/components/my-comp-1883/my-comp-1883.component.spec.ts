import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1883Component } from './my-comp-1883.component';

describe('MyComp1883Component', () => {
  let component: MyComp1883Component;
  let fixture: ComponentFixture<MyComp1883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
