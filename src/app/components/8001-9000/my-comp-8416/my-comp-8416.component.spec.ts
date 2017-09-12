import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8416Component } from './my-comp-8416.component';

describe('MyComp8416Component', () => {
  let component: MyComp8416Component;
  let fixture: ComponentFixture<MyComp8416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
