import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1865Component } from './my-comp-1865.component';

describe('MyComp1865Component', () => {
  let component: MyComp1865Component;
  let fixture: ComponentFixture<MyComp1865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
