import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp870Component } from './my-comp-870.component';

describe('MyComp870Component', () => {
  let component: MyComp870Component;
  let fixture: ComponentFixture<MyComp870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
