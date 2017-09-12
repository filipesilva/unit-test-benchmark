import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3510Component } from './my-comp-3510.component';

describe('MyComp3510Component', () => {
  let component: MyComp3510Component;
  let fixture: ComponentFixture<MyComp3510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
