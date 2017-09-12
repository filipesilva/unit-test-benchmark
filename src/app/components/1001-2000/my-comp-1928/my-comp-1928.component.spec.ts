import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1928Component } from './my-comp-1928.component';

describe('MyComp1928Component', () => {
  let component: MyComp1928Component;
  let fixture: ComponentFixture<MyComp1928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
