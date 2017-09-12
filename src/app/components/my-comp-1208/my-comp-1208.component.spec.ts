import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1208Component } from './my-comp-1208.component';

describe('MyComp1208Component', () => {
  let component: MyComp1208Component;
  let fixture: ComponentFixture<MyComp1208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
