import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1848Component } from './my-comp-1848.component';

describe('MyComp1848Component', () => {
  let component: MyComp1848Component;
  let fixture: ComponentFixture<MyComp1848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
