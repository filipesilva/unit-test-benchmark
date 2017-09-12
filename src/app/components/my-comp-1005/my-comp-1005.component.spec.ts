import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1005Component } from './my-comp-1005.component';

describe('MyComp1005Component', () => {
  let component: MyComp1005Component;
  let fixture: ComponentFixture<MyComp1005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
