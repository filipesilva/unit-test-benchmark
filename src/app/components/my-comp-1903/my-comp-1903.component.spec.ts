import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1903Component } from './my-comp-1903.component';

describe('MyComp1903Component', () => {
  let component: MyComp1903Component;
  let fixture: ComponentFixture<MyComp1903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
