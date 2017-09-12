import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1728Component } from './my-comp-1728.component';

describe('MyComp1728Component', () => {
  let component: MyComp1728Component;
  let fixture: ComponentFixture<MyComp1728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
