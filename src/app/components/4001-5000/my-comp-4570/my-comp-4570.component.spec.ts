import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4570Component } from './my-comp-4570.component';

describe('MyComp4570Component', () => {
  let component: MyComp4570Component;
  let fixture: ComponentFixture<MyComp4570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
