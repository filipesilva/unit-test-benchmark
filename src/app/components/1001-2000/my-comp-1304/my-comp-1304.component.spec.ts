import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1304Component } from './my-comp-1304.component';

describe('MyComp1304Component', () => {
  let component: MyComp1304Component;
  let fixture: ComponentFixture<MyComp1304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
