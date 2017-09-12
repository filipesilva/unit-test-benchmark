import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7252Component } from './my-comp-7252.component';

describe('MyComp7252Component', () => {
  let component: MyComp7252Component;
  let fixture: ComponentFixture<MyComp7252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
