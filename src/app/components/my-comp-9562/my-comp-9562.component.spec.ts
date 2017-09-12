import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9562Component } from './my-comp-9562.component';

describe('MyComp9562Component', () => {
  let component: MyComp9562Component;
  let fixture: ComponentFixture<MyComp9562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
