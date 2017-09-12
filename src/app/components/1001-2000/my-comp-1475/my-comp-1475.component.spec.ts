import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1475Component } from './my-comp-1475.component';

describe('MyComp1475Component', () => {
  let component: MyComp1475Component;
  let fixture: ComponentFixture<MyComp1475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
