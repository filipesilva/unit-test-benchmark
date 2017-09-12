import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1759Component } from './my-comp-1759.component';

describe('MyComp1759Component', () => {
  let component: MyComp1759Component;
  let fixture: ComponentFixture<MyComp1759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
