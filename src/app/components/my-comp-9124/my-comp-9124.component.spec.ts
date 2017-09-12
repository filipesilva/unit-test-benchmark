import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9124Component } from './my-comp-9124.component';

describe('MyComp9124Component', () => {
  let component: MyComp9124Component;
  let fixture: ComponentFixture<MyComp9124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
