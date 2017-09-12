import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8193Component } from './my-comp-8193.component';

describe('MyComp8193Component', () => {
  let component: MyComp8193Component;
  let fixture: ComponentFixture<MyComp8193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
