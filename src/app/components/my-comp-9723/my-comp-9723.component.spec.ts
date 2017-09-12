import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9723Component } from './my-comp-9723.component';

describe('MyComp9723Component', () => {
  let component: MyComp9723Component;
  let fixture: ComponentFixture<MyComp9723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
