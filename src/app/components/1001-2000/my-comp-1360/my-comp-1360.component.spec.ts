import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1360Component } from './my-comp-1360.component';

describe('MyComp1360Component', () => {
  let component: MyComp1360Component;
  let fixture: ComponentFixture<MyComp1360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
