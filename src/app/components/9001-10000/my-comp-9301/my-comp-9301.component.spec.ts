import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9301Component } from './my-comp-9301.component';

describe('MyComp9301Component', () => {
  let component: MyComp9301Component;
  let fixture: ComponentFixture<MyComp9301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
