import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9521Component } from './my-comp-9521.component';

describe('MyComp9521Component', () => {
  let component: MyComp9521Component;
  let fixture: ComponentFixture<MyComp9521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
