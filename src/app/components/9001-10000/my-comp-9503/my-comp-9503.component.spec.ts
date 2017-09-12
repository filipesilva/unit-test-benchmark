import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9503Component } from './my-comp-9503.component';

describe('MyComp9503Component', () => {
  let component: MyComp9503Component;
  let fixture: ComponentFixture<MyComp9503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
