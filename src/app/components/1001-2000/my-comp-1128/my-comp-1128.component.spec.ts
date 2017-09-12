import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1128Component } from './my-comp-1128.component';

describe('MyComp1128Component', () => {
  let component: MyComp1128Component;
  let fixture: ComponentFixture<MyComp1128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
