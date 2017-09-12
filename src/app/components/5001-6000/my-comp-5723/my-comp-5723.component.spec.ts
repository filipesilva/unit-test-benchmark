import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5723Component } from './my-comp-5723.component';

describe('MyComp5723Component', () => {
  let component: MyComp5723Component;
  let fixture: ComponentFixture<MyComp5723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
