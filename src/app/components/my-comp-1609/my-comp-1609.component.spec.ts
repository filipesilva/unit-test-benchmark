import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1609Component } from './my-comp-1609.component';

describe('MyComp1609Component', () => {
  let component: MyComp1609Component;
  let fixture: ComponentFixture<MyComp1609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
