import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1718Component } from './my-comp-1718.component';

describe('MyComp1718Component', () => {
  let component: MyComp1718Component;
  let fixture: ComponentFixture<MyComp1718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
