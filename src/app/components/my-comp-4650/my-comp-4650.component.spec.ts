import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4650Component } from './my-comp-4650.component';

describe('MyComp4650Component', () => {
  let component: MyComp4650Component;
  let fixture: ComponentFixture<MyComp4650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
