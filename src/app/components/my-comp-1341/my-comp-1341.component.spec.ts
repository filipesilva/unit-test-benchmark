import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1341Component } from './my-comp-1341.component';

describe('MyComp1341Component', () => {
  let component: MyComp1341Component;
  let fixture: ComponentFixture<MyComp1341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
