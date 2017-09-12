import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9125Component } from './my-comp-9125.component';

describe('MyComp9125Component', () => {
  let component: MyComp9125Component;
  let fixture: ComponentFixture<MyComp9125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
