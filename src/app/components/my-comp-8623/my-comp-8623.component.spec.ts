import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8623Component } from './my-comp-8623.component';

describe('MyComp8623Component', () => {
  let component: MyComp8623Component;
  let fixture: ComponentFixture<MyComp8623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
