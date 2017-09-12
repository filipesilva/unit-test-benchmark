import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1315Component } from './my-comp-1315.component';

describe('MyComp1315Component', () => {
  let component: MyComp1315Component;
  let fixture: ComponentFixture<MyComp1315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
