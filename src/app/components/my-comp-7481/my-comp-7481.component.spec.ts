import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7481Component } from './my-comp-7481.component';

describe('MyComp7481Component', () => {
  let component: MyComp7481Component;
  let fixture: ComponentFixture<MyComp7481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
