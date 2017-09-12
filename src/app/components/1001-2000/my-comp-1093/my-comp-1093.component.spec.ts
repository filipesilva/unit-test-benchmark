import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1093Component } from './my-comp-1093.component';

describe('MyComp1093Component', () => {
  let component: MyComp1093Component;
  let fixture: ComponentFixture<MyComp1093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
