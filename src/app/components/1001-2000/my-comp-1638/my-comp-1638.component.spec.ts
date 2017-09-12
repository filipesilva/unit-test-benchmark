import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1638Component } from './my-comp-1638.component';

describe('MyComp1638Component', () => {
  let component: MyComp1638Component;
  let fixture: ComponentFixture<MyComp1638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
