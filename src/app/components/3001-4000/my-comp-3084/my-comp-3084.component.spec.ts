import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3084Component } from './my-comp-3084.component';

describe('MyComp3084Component', () => {
  let component: MyComp3084Component;
  let fixture: ComponentFixture<MyComp3084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
