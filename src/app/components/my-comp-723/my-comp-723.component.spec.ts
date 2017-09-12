import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp723Component } from './my-comp-723.component';

describe('MyComp723Component', () => {
  let component: MyComp723Component;
  let fixture: ComponentFixture<MyComp723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
