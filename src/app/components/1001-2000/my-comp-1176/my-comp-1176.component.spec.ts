import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1176Component } from './my-comp-1176.component';

describe('MyComp1176Component', () => {
  let component: MyComp1176Component;
  let fixture: ComponentFixture<MyComp1176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
