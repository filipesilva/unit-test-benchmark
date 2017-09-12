import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7929Component } from './my-comp-7929.component';

describe('MyComp7929Component', () => {
  let component: MyComp7929Component;
  let fixture: ComponentFixture<MyComp7929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
