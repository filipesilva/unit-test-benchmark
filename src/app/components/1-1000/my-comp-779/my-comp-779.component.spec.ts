import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp779Component } from './my-comp-779.component';

describe('MyComp779Component', () => {
  let component: MyComp779Component;
  let fixture: ComponentFixture<MyComp779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
