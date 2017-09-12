import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4269Component } from './my-comp-4269.component';

describe('MyComp4269Component', () => {
  let component: MyComp4269Component;
  let fixture: ComponentFixture<MyComp4269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
