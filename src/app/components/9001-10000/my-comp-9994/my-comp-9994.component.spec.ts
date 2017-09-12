import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9994Component } from './my-comp-9994.component';

describe('MyComp9994Component', () => {
  let component: MyComp9994Component;
  let fixture: ComponentFixture<MyComp9994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
