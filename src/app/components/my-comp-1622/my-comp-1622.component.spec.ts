import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1622Component } from './my-comp-1622.component';

describe('MyComp1622Component', () => {
  let component: MyComp1622Component;
  let fixture: ComponentFixture<MyComp1622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
