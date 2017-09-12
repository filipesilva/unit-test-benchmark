import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9757Component } from './my-comp-9757.component';

describe('MyComp9757Component', () => {
  let component: MyComp9757Component;
  let fixture: ComponentFixture<MyComp9757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
