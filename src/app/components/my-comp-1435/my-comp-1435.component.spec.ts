import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1435Component } from './my-comp-1435.component';

describe('MyComp1435Component', () => {
  let component: MyComp1435Component;
  let fixture: ComponentFixture<MyComp1435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
