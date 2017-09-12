import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5252Component } from './my-comp-5252.component';

describe('MyComp5252Component', () => {
  let component: MyComp5252Component;
  let fixture: ComponentFixture<MyComp5252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
