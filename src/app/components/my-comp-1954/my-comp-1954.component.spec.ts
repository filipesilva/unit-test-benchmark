import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1954Component } from './my-comp-1954.component';

describe('MyComp1954Component', () => {
  let component: MyComp1954Component;
  let fixture: ComponentFixture<MyComp1954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
