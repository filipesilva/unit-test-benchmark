import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1479Component } from './my-comp-1479.component';

describe('MyComp1479Component', () => {
  let component: MyComp1479Component;
  let fixture: ComponentFixture<MyComp1479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
