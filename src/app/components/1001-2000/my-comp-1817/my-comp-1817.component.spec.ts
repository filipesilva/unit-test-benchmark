import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1817Component } from './my-comp-1817.component';

describe('MyComp1817Component', () => {
  let component: MyComp1817Component;
  let fixture: ComponentFixture<MyComp1817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
