import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1029Component } from './my-comp-1029.component';

describe('MyComp1029Component', () => {
  let component: MyComp1029Component;
  let fixture: ComponentFixture<MyComp1029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
