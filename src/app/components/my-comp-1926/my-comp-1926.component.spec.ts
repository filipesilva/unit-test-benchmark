import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1926Component } from './my-comp-1926.component';

describe('MyComp1926Component', () => {
  let component: MyComp1926Component;
  let fixture: ComponentFixture<MyComp1926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
