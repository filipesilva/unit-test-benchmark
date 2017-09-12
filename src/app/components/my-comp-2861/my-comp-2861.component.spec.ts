import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2861Component } from './my-comp-2861.component';

describe('MyComp2861Component', () => {
  let component: MyComp2861Component;
  let fixture: ComponentFixture<MyComp2861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
