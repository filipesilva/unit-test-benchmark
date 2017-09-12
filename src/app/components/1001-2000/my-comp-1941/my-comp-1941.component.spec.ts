import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1941Component } from './my-comp-1941.component';

describe('MyComp1941Component', () => {
  let component: MyComp1941Component;
  let fixture: ComponentFixture<MyComp1941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
