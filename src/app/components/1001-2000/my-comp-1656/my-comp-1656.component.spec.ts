import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1656Component } from './my-comp-1656.component';

describe('MyComp1656Component', () => {
  let component: MyComp1656Component;
  let fixture: ComponentFixture<MyComp1656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
