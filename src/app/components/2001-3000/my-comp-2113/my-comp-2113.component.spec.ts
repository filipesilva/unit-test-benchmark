import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2113Component } from './my-comp-2113.component';

describe('MyComp2113Component', () => {
  let component: MyComp2113Component;
  let fixture: ComponentFixture<MyComp2113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
