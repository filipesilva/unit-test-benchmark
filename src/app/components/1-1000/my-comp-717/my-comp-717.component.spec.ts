import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp717Component } from './my-comp-717.component';

describe('MyComp717Component', () => {
  let component: MyComp717Component;
  let fixture: ComponentFixture<MyComp717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
