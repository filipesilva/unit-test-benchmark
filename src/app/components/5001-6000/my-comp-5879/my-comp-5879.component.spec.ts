import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5879Component } from './my-comp-5879.component';

describe('MyComp5879Component', () => {
  let component: MyComp5879Component;
  let fixture: ComponentFixture<MyComp5879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
