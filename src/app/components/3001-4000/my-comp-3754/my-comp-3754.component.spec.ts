import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3754Component } from './my-comp-3754.component';

describe('MyComp3754Component', () => {
  let component: MyComp3754Component;
  let fixture: ComponentFixture<MyComp3754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
