import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9025Component } from './my-comp-9025.component';

describe('MyComp9025Component', () => {
  let component: MyComp9025Component;
  let fixture: ComponentFixture<MyComp9025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
