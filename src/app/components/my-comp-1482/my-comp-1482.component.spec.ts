import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1482Component } from './my-comp-1482.component';

describe('MyComp1482Component', () => {
  let component: MyComp1482Component;
  let fixture: ComponentFixture<MyComp1482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
