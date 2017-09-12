import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1888Component } from './my-comp-1888.component';

describe('MyComp1888Component', () => {
  let component: MyComp1888Component;
  let fixture: ComponentFixture<MyComp1888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
