import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1757Component } from './my-comp-1757.component';

describe('MyComp1757Component', () => {
  let component: MyComp1757Component;
  let fixture: ComponentFixture<MyComp1757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
