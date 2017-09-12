import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp533Component } from './my-comp-533.component';

describe('MyComp533Component', () => {
  let component: MyComp533Component;
  let fixture: ComponentFixture<MyComp533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
