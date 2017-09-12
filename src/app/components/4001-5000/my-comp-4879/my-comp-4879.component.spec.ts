import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4879Component } from './my-comp-4879.component';

describe('MyComp4879Component', () => {
  let component: MyComp4879Component;
  let fixture: ComponentFixture<MyComp4879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
