import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2579Component } from './my-comp-2579.component';

describe('MyComp2579Component', () => {
  let component: MyComp2579Component;
  let fixture: ComponentFixture<MyComp2579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
