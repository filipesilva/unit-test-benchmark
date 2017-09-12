import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1646Component } from './my-comp-1646.component';

describe('MyComp1646Component', () => {
  let component: MyComp1646Component;
  let fixture: ComponentFixture<MyComp1646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
