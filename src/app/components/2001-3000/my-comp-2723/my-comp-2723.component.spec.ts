import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2723Component } from './my-comp-2723.component';

describe('MyComp2723Component', () => {
  let component: MyComp2723Component;
  let fixture: ComponentFixture<MyComp2723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
