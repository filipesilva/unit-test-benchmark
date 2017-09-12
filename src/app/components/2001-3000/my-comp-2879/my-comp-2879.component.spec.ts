import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2879Component } from './my-comp-2879.component';

describe('MyComp2879Component', () => {
  let component: MyComp2879Component;
  let fixture: ComponentFixture<MyComp2879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
