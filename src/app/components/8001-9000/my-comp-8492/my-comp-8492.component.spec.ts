import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8492Component } from './my-comp-8492.component';

describe('MyComp8492Component', () => {
  let component: MyComp8492Component;
  let fixture: ComponentFixture<MyComp8492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
