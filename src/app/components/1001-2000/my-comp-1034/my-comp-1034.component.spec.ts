import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1034Component } from './my-comp-1034.component';

describe('MyComp1034Component', () => {
  let component: MyComp1034Component;
  let fixture: ComponentFixture<MyComp1034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
