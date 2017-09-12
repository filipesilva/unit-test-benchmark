import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1643Component } from './my-comp-1643.component';

describe('MyComp1643Component', () => {
  let component: MyComp1643Component;
  let fixture: ComponentFixture<MyComp1643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
