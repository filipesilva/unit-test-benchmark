import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8879Component } from './my-comp-8879.component';

describe('MyComp8879Component', () => {
  let component: MyComp8879Component;
  let fixture: ComponentFixture<MyComp8879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
