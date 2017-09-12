import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1269Component } from './my-comp-1269.component';

describe('MyComp1269Component', () => {
  let component: MyComp1269Component;
  let fixture: ComponentFixture<MyComp1269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
