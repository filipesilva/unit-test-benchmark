import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9139Component } from './my-comp-9139.component';

describe('MyComp9139Component', () => {
  let component: MyComp9139Component;
  let fixture: ComponentFixture<MyComp9139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
