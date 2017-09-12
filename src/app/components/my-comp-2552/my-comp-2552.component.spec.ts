import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2552Component } from './my-comp-2552.component';

describe('MyComp2552Component', () => {
  let component: MyComp2552Component;
  let fixture: ComponentFixture<MyComp2552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
