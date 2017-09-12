import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1652Component } from './my-comp-1652.component';

describe('MyComp1652Component', () => {
  let component: MyComp1652Component;
  let fixture: ComponentFixture<MyComp1652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
