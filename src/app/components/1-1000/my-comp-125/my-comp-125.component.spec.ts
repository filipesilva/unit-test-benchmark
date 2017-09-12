import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp125Component } from './my-comp-125.component';

describe('MyComp125Component', () => {
  let component: MyComp125Component;
  let fixture: ComponentFixture<MyComp125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
