import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1255Component } from './my-comp-1255.component';

describe('MyComp1255Component', () => {
  let component: MyComp1255Component;
  let fixture: ComponentFixture<MyComp1255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
