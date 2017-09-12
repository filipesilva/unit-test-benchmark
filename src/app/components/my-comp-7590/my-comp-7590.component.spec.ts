import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7590Component } from './my-comp-7590.component';

describe('MyComp7590Component', () => {
  let component: MyComp7590Component;
  let fixture: ComponentFixture<MyComp7590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
