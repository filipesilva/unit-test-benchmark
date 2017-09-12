import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1756Component } from './my-comp-1756.component';

describe('MyComp1756Component', () => {
  let component: MyComp1756Component;
  let fixture: ComponentFixture<MyComp1756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
