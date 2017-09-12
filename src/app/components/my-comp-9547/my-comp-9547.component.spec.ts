import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9547Component } from './my-comp-9547.component';

describe('MyComp9547Component', () => {
  let component: MyComp9547Component;
  let fixture: ComponentFixture<MyComp9547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
