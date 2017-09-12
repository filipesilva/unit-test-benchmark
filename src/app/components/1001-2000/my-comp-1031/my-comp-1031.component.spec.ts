import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1031Component } from './my-comp-1031.component';

describe('MyComp1031Component', () => {
  let component: MyComp1031Component;
  let fixture: ComponentFixture<MyComp1031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
