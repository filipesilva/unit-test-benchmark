import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1620Component } from './my-comp-1620.component';

describe('MyComp1620Component', () => {
  let component: MyComp1620Component;
  let fixture: ComponentFixture<MyComp1620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
