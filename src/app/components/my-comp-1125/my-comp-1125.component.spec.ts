import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1125Component } from './my-comp-1125.component';

describe('MyComp1125Component', () => {
  let component: MyComp1125Component;
  let fixture: ComponentFixture<MyComp1125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
