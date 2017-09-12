import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1692Component } from './my-comp-1692.component';

describe('MyComp1692Component', () => {
  let component: MyComp1692Component;
  let fixture: ComponentFixture<MyComp1692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
