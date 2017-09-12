import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3657Component } from './my-comp-3657.component';

describe('MyComp3657Component', () => {
  let component: MyComp3657Component;
  let fixture: ComponentFixture<MyComp3657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
