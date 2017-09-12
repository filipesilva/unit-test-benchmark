import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3920Component } from './my-comp-3920.component';

describe('MyComp3920Component', () => {
  let component: MyComp3920Component;
  let fixture: ComponentFixture<MyComp3920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
