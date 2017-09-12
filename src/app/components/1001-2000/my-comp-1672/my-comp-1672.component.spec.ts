import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1672Component } from './my-comp-1672.component';

describe('MyComp1672Component', () => {
  let component: MyComp1672Component;
  let fixture: ComponentFixture<MyComp1672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
