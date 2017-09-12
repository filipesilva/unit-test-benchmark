import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1403Component } from './my-comp-1403.component';

describe('MyComp1403Component', () => {
  let component: MyComp1403Component;
  let fixture: ComponentFixture<MyComp1403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
