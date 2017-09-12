import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1953Component } from './my-comp-1953.component';

describe('MyComp1953Component', () => {
  let component: MyComp1953Component;
  let fixture: ComponentFixture<MyComp1953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
