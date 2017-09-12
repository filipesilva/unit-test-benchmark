import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1591Component } from './my-comp-1591.component';

describe('MyComp1591Component', () => {
  let component: MyComp1591Component;
  let fixture: ComponentFixture<MyComp1591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
