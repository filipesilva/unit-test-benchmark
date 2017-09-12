import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1730Component } from './my-comp-1730.component';

describe('MyComp1730Component', () => {
  let component: MyComp1730Component;
  let fixture: ComponentFixture<MyComp1730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
