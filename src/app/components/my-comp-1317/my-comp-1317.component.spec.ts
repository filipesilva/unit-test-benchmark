import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1317Component } from './my-comp-1317.component';

describe('MyComp1317Component', () => {
  let component: MyComp1317Component;
  let fixture: ComponentFixture<MyComp1317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
