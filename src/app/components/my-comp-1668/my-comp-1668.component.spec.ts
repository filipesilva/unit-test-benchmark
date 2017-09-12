import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1668Component } from './my-comp-1668.component';

describe('MyComp1668Component', () => {
  let component: MyComp1668Component;
  let fixture: ComponentFixture<MyComp1668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
