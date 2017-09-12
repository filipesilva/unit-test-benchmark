import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2341Component } from './my-comp-2341.component';

describe('MyComp2341Component', () => {
  let component: MyComp2341Component;
  let fixture: ComponentFixture<MyComp2341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
