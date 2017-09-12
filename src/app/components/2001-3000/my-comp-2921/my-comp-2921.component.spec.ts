import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2921Component } from './my-comp-2921.component';

describe('MyComp2921Component', () => {
  let component: MyComp2921Component;
  let fixture: ComponentFixture<MyComp2921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
