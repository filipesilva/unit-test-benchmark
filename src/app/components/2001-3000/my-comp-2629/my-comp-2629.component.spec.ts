import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2629Component } from './my-comp-2629.component';

describe('MyComp2629Component', () => {
  let component: MyComp2629Component;
  let fixture: ComponentFixture<MyComp2629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
