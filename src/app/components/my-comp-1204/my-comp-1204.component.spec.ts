import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1204Component } from './my-comp-1204.component';

describe('MyComp1204Component', () => {
  let component: MyComp1204Component;
  let fixture: ComponentFixture<MyComp1204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
