import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1335Component } from './my-comp-1335.component';

describe('MyComp1335Component', () => {
  let component: MyComp1335Component;
  let fixture: ComponentFixture<MyComp1335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
