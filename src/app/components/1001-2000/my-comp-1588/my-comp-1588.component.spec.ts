import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1588Component } from './my-comp-1588.component';

describe('MyComp1588Component', () => {
  let component: MyComp1588Component;
  let fixture: ComponentFixture<MyComp1588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
