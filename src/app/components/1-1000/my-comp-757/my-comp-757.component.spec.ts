import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp757Component } from './my-comp-757.component';

describe('MyComp757Component', () => {
  let component: MyComp757Component;
  let fixture: ComponentFixture<MyComp757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
