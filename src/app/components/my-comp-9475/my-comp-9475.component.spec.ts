import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9475Component } from './my-comp-9475.component';

describe('MyComp9475Component', () => {
  let component: MyComp9475Component;
  let fixture: ComponentFixture<MyComp9475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
