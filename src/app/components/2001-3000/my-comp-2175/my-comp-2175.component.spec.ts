import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2175Component } from './my-comp-2175.component';

describe('MyComp2175Component', () => {
  let component: MyComp2175Component;
  let fixture: ComponentFixture<MyComp2175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
