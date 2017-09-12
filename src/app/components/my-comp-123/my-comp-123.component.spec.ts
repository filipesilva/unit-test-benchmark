import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp123Component } from './my-comp-123.component';

describe('MyComp123Component', () => {
  let component: MyComp123Component;
  let fixture: ComponentFixture<MyComp123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
