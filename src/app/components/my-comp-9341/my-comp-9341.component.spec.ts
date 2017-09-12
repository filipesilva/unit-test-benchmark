import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9341Component } from './my-comp-9341.component';

describe('MyComp9341Component', () => {
  let component: MyComp9341Component;
  let fixture: ComponentFixture<MyComp9341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
