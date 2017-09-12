import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9578Component } from './my-comp-9578.component';

describe('MyComp9578Component', () => {
  let component: MyComp9578Component;
  let fixture: ComponentFixture<MyComp9578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
