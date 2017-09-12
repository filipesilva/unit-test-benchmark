import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3624Component } from './my-comp-3624.component';

describe('MyComp3624Component', () => {
  let component: MyComp3624Component;
  let fixture: ComponentFixture<MyComp3624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
