import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1808Component } from './my-comp-1808.component';

describe('MyComp1808Component', () => {
  let component: MyComp1808Component;
  let fixture: ComponentFixture<MyComp1808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
