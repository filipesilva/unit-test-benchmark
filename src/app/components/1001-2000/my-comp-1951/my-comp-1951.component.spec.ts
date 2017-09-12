import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1951Component } from './my-comp-1951.component';

describe('MyComp1951Component', () => {
  let component: MyComp1951Component;
  let fixture: ComponentFixture<MyComp1951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
