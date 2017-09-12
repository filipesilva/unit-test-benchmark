import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9494Component } from './my-comp-9494.component';

describe('MyComp9494Component', () => {
  let component: MyComp9494Component;
  let fixture: ComponentFixture<MyComp9494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
