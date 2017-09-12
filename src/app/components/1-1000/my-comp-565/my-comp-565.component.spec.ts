import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp565Component } from './my-comp-565.component';

describe('MyComp565Component', () => {
  let component: MyComp565Component;
  let fixture: ComponentFixture<MyComp565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
