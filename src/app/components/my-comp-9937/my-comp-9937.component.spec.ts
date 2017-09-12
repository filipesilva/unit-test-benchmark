import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9937Component } from './my-comp-9937.component';

describe('MyComp9937Component', () => {
  let component: MyComp9937Component;
  let fixture: ComponentFixture<MyComp9937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
