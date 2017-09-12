import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1195Component } from './my-comp-1195.component';

describe('MyComp1195Component', () => {
  let component: MyComp1195Component;
  let fixture: ComponentFixture<MyComp1195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
