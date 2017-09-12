import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1428Component } from './my-comp-1428.component';

describe('MyComp1428Component', () => {
  let component: MyComp1428Component;
  let fixture: ComponentFixture<MyComp1428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
