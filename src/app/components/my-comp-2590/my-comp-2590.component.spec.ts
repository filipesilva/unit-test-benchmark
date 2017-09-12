import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2590Component } from './my-comp-2590.component';

describe('MyComp2590Component', () => {
  let component: MyComp2590Component;
  let fixture: ComponentFixture<MyComp2590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
