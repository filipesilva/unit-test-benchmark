import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1847Component } from './my-comp-1847.component';

describe('MyComp1847Component', () => {
  let component: MyComp1847Component;
  let fixture: ComponentFixture<MyComp1847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
