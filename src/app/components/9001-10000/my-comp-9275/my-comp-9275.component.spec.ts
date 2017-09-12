import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9275Component } from './my-comp-9275.component';

describe('MyComp9275Component', () => {
  let component: MyComp9275Component;
  let fixture: ComponentFixture<MyComp9275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
