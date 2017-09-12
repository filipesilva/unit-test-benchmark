import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1815Component } from './my-comp-1815.component';

describe('MyComp1815Component', () => {
  let component: MyComp1815Component;
  let fixture: ComponentFixture<MyComp1815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
