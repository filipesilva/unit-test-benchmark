import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1887Component } from './my-comp-1887.component';

describe('MyComp1887Component', () => {
  let component: MyComp1887Component;
  let fixture: ComponentFixture<MyComp1887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
