import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9865Component } from './my-comp-9865.component';

describe('MyComp9865Component', () => {
  let component: MyComp9865Component;
  let fixture: ComponentFixture<MyComp9865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
