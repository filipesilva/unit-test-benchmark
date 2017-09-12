import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2365Component } from './my-comp-2365.component';

describe('MyComp2365Component', () => {
  let component: MyComp2365Component;
  let fixture: ComponentFixture<MyComp2365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
