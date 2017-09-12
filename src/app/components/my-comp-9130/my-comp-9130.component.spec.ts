import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9130Component } from './my-comp-9130.component';

describe('MyComp9130Component', () => {
  let component: MyComp9130Component;
  let fixture: ComponentFixture<MyComp9130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
