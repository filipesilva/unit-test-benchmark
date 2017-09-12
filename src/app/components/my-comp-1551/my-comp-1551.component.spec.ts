import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1551Component } from './my-comp-1551.component';

describe('MyComp1551Component', () => {
  let component: MyComp1551Component;
  let fixture: ComponentFixture<MyComp1551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
