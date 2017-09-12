import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8399Component } from './my-comp-8399.component';

describe('MyComp8399Component', () => {
  let component: MyComp8399Component;
  let fixture: ComponentFixture<MyComp8399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
