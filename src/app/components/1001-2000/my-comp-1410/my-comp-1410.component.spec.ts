import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1410Component } from './my-comp-1410.component';

describe('MyComp1410Component', () => {
  let component: MyComp1410Component;
  let fixture: ComponentFixture<MyComp1410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
