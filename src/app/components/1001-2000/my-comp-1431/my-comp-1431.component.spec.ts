import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1431Component } from './my-comp-1431.component';

describe('MyComp1431Component', () => {
  let component: MyComp1431Component;
  let fixture: ComponentFixture<MyComp1431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
