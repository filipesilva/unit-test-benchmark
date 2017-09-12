import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1252Component } from './my-comp-1252.component';

describe('MyComp1252Component', () => {
  let component: MyComp1252Component;
  let fixture: ComponentFixture<MyComp1252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
