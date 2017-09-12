import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1310Component } from './my-comp-1310.component';

describe('MyComp1310Component', () => {
  let component: MyComp1310Component;
  let fixture: ComponentFixture<MyComp1310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
