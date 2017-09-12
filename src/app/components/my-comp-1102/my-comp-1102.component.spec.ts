import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1102Component } from './my-comp-1102.component';

describe('MyComp1102Component', () => {
  let component: MyComp1102Component;
  let fixture: ComponentFixture<MyComp1102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
