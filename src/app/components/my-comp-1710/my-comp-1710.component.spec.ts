import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1710Component } from './my-comp-1710.component';

describe('MyComp1710Component', () => {
  let component: MyComp1710Component;
  let fixture: ComponentFixture<MyComp1710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
