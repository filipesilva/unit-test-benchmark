import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1339Component } from './my-comp-1339.component';

describe('MyComp1339Component', () => {
  let component: MyComp1339Component;
  let fixture: ComponentFixture<MyComp1339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
