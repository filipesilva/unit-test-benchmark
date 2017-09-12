import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3456Component } from './my-comp-3456.component';

describe('MyComp3456Component', () => {
  let component: MyComp3456Component;
  let fixture: ComponentFixture<MyComp3456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
