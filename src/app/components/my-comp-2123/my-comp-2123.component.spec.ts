import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2123Component } from './my-comp-2123.component';

describe('MyComp2123Component', () => {
  let component: MyComp2123Component;
  let fixture: ComponentFixture<MyComp2123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
