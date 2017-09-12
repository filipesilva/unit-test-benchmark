import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7879Component } from './my-comp-7879.component';

describe('MyComp7879Component', () => {
  let component: MyComp7879Component;
  let fixture: ComponentFixture<MyComp7879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
