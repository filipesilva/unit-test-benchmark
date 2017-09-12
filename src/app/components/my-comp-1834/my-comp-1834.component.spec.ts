import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1834Component } from './my-comp-1834.component';

describe('MyComp1834Component', () => {
  let component: MyComp1834Component;
  let fixture: ComponentFixture<MyComp1834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
