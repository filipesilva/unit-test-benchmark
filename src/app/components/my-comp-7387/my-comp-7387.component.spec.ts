import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7387Component } from './my-comp-7387.component';

describe('MyComp7387Component', () => {
  let component: MyComp7387Component;
  let fixture: ComponentFixture<MyComp7387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
