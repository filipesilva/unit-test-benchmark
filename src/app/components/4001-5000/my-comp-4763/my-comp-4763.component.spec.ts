import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4763Component } from './my-comp-4763.component';

describe('MyComp4763Component', () => {
  let component: MyComp4763Component;
  let fixture: ComponentFixture<MyComp4763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
