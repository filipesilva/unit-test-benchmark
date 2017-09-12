import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1297Component } from './my-comp-1297.component';

describe('MyComp1297Component', () => {
  let component: MyComp1297Component;
  let fixture: ComponentFixture<MyComp1297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
