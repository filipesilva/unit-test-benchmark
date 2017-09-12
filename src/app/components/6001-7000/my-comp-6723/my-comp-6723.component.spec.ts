import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6723Component } from './my-comp-6723.component';

describe('MyComp6723Component', () => {
  let component: MyComp6723Component;
  let fixture: ComponentFixture<MyComp6723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
