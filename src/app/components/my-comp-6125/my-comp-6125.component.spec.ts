import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6125Component } from './my-comp-6125.component';

describe('MyComp6125Component', () => {
  let component: MyComp6125Component;
  let fixture: ComponentFixture<MyComp6125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
