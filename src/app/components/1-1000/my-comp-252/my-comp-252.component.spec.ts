import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp252Component } from './my-comp-252.component';

describe('MyComp252Component', () => {
  let component: MyComp252Component;
  let fixture: ComponentFixture<MyComp252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
