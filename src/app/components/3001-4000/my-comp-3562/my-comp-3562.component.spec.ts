import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3562Component } from './my-comp-3562.component';

describe('MyComp3562Component', () => {
  let component: MyComp3562Component;
  let fixture: ComponentFixture<MyComp3562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
