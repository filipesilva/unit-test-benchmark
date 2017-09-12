import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2029Component } from './my-comp-2029.component';

describe('MyComp2029Component', () => {
  let component: MyComp2029Component;
  let fixture: ComponentFixture<MyComp2029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
