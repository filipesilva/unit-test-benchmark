import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1281Component } from './my-comp-1281.component';

describe('MyComp1281Component', () => {
  let component: MyComp1281Component;
  let fixture: ComponentFixture<MyComp1281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
