import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1873Component } from './my-comp-1873.component';

describe('MyComp1873Component', () => {
  let component: MyComp1873Component;
  let fixture: ComponentFixture<MyComp1873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
