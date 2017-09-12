import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1278Component } from './my-comp-1278.component';

describe('MyComp1278Component', () => {
  let component: MyComp1278Component;
  let fixture: ComponentFixture<MyComp1278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
