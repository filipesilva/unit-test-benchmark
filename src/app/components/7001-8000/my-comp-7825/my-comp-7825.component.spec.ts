import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7825Component } from './my-comp-7825.component';

describe('MyComp7825Component', () => {
  let component: MyComp7825Component;
  let fixture: ComponentFixture<MyComp7825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
