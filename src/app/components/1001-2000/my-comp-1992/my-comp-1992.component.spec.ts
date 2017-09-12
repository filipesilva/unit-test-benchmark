import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1992Component } from './my-comp-1992.component';

describe('MyComp1992Component', () => {
  let component: MyComp1992Component;
  let fixture: ComponentFixture<MyComp1992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
