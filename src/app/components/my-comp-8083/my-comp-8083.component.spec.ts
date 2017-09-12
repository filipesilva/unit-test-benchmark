import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8083Component } from './my-comp-8083.component';

describe('MyComp8083Component', () => {
  let component: MyComp8083Component;
  let fixture: ComponentFixture<MyComp8083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
