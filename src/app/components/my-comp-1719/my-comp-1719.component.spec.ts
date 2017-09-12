import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1719Component } from './my-comp-1719.component';

describe('MyComp1719Component', () => {
  let component: MyComp1719Component;
  let fixture: ComponentFixture<MyComp1719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
