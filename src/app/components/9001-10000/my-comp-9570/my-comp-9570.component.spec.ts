import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9570Component } from './my-comp-9570.component';

describe('MyComp9570Component', () => {
  let component: MyComp9570Component;
  let fixture: ComponentFixture<MyComp9570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
