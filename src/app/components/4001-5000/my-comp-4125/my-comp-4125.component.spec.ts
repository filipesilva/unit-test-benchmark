import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4125Component } from './my-comp-4125.component';

describe('MyComp4125Component', () => {
  let component: MyComp4125Component;
  let fixture: ComponentFixture<MyComp4125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
