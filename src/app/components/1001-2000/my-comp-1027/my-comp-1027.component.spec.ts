import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1027Component } from './my-comp-1027.component';

describe('MyComp1027Component', () => {
  let component: MyComp1027Component;
  let fixture: ComponentFixture<MyComp1027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
