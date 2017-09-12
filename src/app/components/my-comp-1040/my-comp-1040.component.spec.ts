import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1040Component } from './my-comp-1040.component';

describe('MyComp1040Component', () => {
  let component: MyComp1040Component;
  let fixture: ComponentFixture<MyComp1040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
