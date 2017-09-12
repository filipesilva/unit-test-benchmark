import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp562Component } from './my-comp-562.component';

describe('MyComp562Component', () => {
  let component: MyComp562Component;
  let fixture: ComponentFixture<MyComp562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
