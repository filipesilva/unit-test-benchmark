import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8320Component } from './my-comp-8320.component';

describe('MyComp8320Component', () => {
  let component: MyComp8320Component;
  let fixture: ComponentFixture<MyComp8320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
