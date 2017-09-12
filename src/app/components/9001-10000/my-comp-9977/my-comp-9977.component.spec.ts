import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9977Component } from './my-comp-9977.component';

describe('MyComp9977Component', () => {
  let component: MyComp9977Component;
  let fixture: ComponentFixture<MyComp9977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
