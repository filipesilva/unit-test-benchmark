import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1346Component } from './my-comp-1346.component';

describe('MyComp1346Component', () => {
  let component: MyComp1346Component;
  let fixture: ComponentFixture<MyComp1346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
