import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3953Component } from './my-comp-3953.component';

describe('MyComp3953Component', () => {
  let component: MyComp3953Component;
  let fixture: ComponentFixture<MyComp3953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
