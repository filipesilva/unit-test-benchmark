import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7125Component } from './my-comp-7125.component';

describe('MyComp7125Component', () => {
  let component: MyComp7125Component;
  let fixture: ComponentFixture<MyComp7125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
