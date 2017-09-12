import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1446Component } from './my-comp-1446.component';

describe('MyComp1446Component', () => {
  let component: MyComp1446Component;
  let fixture: ComponentFixture<MyComp1446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
