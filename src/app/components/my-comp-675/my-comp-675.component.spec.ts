import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp675Component } from './my-comp-675.component';

describe('MyComp675Component', () => {
  let component: MyComp675Component;
  let fixture: ComponentFixture<MyComp675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
