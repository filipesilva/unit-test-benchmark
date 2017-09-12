import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1610Component } from './my-comp-1610.component';

describe('MyComp1610Component', () => {
  let component: MyComp1610Component;
  let fixture: ComponentFixture<MyComp1610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
