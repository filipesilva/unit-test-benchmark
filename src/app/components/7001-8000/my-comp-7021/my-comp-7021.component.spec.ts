import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7021Component } from './my-comp-7021.component';

describe('MyComp7021Component', () => {
  let component: MyComp7021Component;
  let fixture: ComponentFixture<MyComp7021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
