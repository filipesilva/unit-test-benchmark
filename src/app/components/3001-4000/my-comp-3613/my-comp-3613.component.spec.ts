import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3613Component } from './my-comp-3613.component';

describe('MyComp3613Component', () => {
  let component: MyComp3613Component;
  let fixture: ComponentFixture<MyComp3613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
