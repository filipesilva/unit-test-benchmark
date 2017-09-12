import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1554Component } from './my-comp-1554.component';

describe('MyComp1554Component', () => {
  let component: MyComp1554Component;
  let fixture: ComponentFixture<MyComp1554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
