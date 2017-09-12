import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1144Component } from './my-comp-1144.component';

describe('MyComp1144Component', () => {
  let component: MyComp1144Component;
  let fixture: ComponentFixture<MyComp1144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
