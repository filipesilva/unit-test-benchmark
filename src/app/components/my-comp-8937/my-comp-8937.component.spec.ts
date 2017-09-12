import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8937Component } from './my-comp-8937.component';

describe('MyComp8937Component', () => {
  let component: MyComp8937Component;
  let fixture: ComponentFixture<MyComp8937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
