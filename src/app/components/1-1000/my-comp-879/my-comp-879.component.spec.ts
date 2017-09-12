import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp879Component } from './my-comp-879.component';

describe('MyComp879Component', () => {
  let component: MyComp879Component;
  let fixture: ComponentFixture<MyComp879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
