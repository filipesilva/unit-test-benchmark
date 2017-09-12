import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1241Component } from './my-comp-1241.component';

describe('MyComp1241Component', () => {
  let component: MyComp1241Component;
  let fixture: ComponentFixture<MyComp1241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
