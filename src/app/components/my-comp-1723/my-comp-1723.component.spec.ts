import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1723Component } from './my-comp-1723.component';

describe('MyComp1723Component', () => {
  let component: MyComp1723Component;
  let fixture: ComponentFixture<MyComp1723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
