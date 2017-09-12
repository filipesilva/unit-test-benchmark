import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7258Component } from './my-comp-7258.component';

describe('MyComp7258Component', () => {
  let component: MyComp7258Component;
  let fixture: ComponentFixture<MyComp7258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
