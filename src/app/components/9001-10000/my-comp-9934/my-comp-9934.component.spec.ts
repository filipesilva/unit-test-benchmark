import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9934Component } from './my-comp-9934.component';

describe('MyComp9934Component', () => {
  let component: MyComp9934Component;
  let fixture: ComponentFixture<MyComp9934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
