import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1538Component } from './my-comp-1538.component';

describe('MyComp1538Component', () => {
  let component: MyComp1538Component;
  let fixture: ComponentFixture<MyComp1538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
