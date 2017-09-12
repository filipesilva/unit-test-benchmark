import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1552Component } from './my-comp-1552.component';

describe('MyComp1552Component', () => {
  let component: MyComp1552Component;
  let fixture: ComponentFixture<MyComp1552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
