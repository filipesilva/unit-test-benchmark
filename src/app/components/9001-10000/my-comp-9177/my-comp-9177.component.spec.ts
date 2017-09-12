import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9177Component } from './my-comp-9177.component';

describe('MyComp9177Component', () => {
  let component: MyComp9177Component;
  let fixture: ComponentFixture<MyComp9177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
