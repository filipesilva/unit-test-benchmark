import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1676Component } from './my-comp-1676.component';

describe('MyComp1676Component', () => {
  let component: MyComp1676Component;
  let fixture: ComponentFixture<MyComp1676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
