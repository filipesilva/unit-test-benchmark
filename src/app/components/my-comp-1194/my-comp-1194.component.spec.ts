import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1194Component } from './my-comp-1194.component';

describe('MyComp1194Component', () => {
  let component: MyComp1194Component;
  let fixture: ComponentFixture<MyComp1194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
