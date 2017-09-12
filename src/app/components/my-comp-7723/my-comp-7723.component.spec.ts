import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7723Component } from './my-comp-7723.component';

describe('MyComp7723Component', () => {
  let component: MyComp7723Component;
  let fixture: ComponentFixture<MyComp7723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
