import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2684Component } from './my-comp-2684.component';

describe('MyComp2684Component', () => {
  let component: MyComp2684Component;
  let fixture: ComponentFixture<MyComp2684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
