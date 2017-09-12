import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2054Component } from './my-comp-2054.component';

describe('MyComp2054Component', () => {
  let component: MyComp2054Component;
  let fixture: ComponentFixture<MyComp2054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
