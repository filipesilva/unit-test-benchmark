import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9087Component } from './my-comp-9087.component';

describe('MyComp9087Component', () => {
  let component: MyComp9087Component;
  let fixture: ComponentFixture<MyComp9087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
