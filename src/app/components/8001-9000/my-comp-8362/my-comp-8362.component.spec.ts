import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8362Component } from './my-comp-8362.component';

describe('MyComp8362Component', () => {
  let component: MyComp8362Component;
  let fixture: ComponentFixture<MyComp8362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
