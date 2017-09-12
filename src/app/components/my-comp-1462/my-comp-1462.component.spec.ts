import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1462Component } from './my-comp-1462.component';

describe('MyComp1462Component', () => {
  let component: MyComp1462Component;
  let fixture: ComponentFixture<MyComp1462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
