import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1046Component } from './my-comp-1046.component';

describe('MyComp1046Component', () => {
  let component: MyComp1046Component;
  let fixture: ComponentFixture<MyComp1046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
