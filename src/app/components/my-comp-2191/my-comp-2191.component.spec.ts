import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2191Component } from './my-comp-2191.component';

describe('MyComp2191Component', () => {
  let component: MyComp2191Component;
  let fixture: ComponentFixture<MyComp2191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
