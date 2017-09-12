import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2993Component } from './my-comp-2993.component';

describe('MyComp2993Component', () => {
  let component: MyComp2993Component;
  let fixture: ComponentFixture<MyComp2993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
