import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9911Component } from './my-comp-9911.component';

describe('MyComp9911Component', () => {
  let component: MyComp9911Component;
  let fixture: ComponentFixture<MyComp9911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
