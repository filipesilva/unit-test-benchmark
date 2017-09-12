import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1689Component } from './my-comp-1689.component';

describe('MyComp1689Component', () => {
  let component: MyComp1689Component;
  let fixture: ComponentFixture<MyComp1689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
