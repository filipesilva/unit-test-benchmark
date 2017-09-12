import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8411Component } from './my-comp-8411.component';

describe('MyComp8411Component', () => {
  let component: MyComp8411Component;
  let fixture: ComponentFixture<MyComp8411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
