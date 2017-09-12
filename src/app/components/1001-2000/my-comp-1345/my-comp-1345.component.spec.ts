import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1345Component } from './my-comp-1345.component';

describe('MyComp1345Component', () => {
  let component: MyComp1345Component;
  let fixture: ComponentFixture<MyComp1345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
