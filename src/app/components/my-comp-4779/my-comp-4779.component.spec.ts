import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4779Component } from './my-comp-4779.component';

describe('MyComp4779Component', () => {
  let component: MyComp4779Component;
  let fixture: ComponentFixture<MyComp4779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
