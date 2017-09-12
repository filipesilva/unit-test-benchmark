import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9141Component } from './my-comp-9141.component';

describe('MyComp9141Component', () => {
  let component: MyComp9141Component;
  let fixture: ComponentFixture<MyComp9141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
