import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9595Component } from './my-comp-9595.component';

describe('MyComp9595Component', () => {
  let component: MyComp9595Component;
  let fixture: ComponentFixture<MyComp9595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
