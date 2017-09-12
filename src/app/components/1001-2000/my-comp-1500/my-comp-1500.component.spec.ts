import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1500Component } from './my-comp-1500.component';

describe('MyComp1500Component', () => {
  let component: MyComp1500Component;
  let fixture: ComponentFixture<MyComp1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
