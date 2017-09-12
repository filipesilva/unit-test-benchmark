import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2505Component } from './my-comp-2505.component';

describe('MyComp2505Component', () => {
  let component: MyComp2505Component;
  let fixture: ComponentFixture<MyComp2505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
