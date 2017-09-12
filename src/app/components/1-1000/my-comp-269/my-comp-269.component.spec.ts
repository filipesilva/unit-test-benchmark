import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp269Component } from './my-comp-269.component';

describe('MyComp269Component', () => {
  let component: MyComp269Component;
  let fixture: ComponentFixture<MyComp269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
