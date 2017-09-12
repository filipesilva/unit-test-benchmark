import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1882Component } from './my-comp-1882.component';

describe('MyComp1882Component', () => {
  let component: MyComp1882Component;
  let fixture: ComponentFixture<MyComp1882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
