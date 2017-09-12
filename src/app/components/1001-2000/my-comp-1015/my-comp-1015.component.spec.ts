import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1015Component } from './my-comp-1015.component';

describe('MyComp1015Component', () => {
  let component: MyComp1015Component;
  let fixture: ComponentFixture<MyComp1015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
