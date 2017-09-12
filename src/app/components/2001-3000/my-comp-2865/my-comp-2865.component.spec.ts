import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2865Component } from './my-comp-2865.component';

describe('MyComp2865Component', () => {
  let component: MyComp2865Component;
  let fixture: ComponentFixture<MyComp2865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
