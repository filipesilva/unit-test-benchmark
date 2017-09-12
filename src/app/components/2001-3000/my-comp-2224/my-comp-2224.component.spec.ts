import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2224Component } from './my-comp-2224.component';

describe('MyComp2224Component', () => {
  let component: MyComp2224Component;
  let fixture: ComponentFixture<MyComp2224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
