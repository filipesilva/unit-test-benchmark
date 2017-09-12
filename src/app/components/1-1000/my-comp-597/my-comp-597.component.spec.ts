import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp597Component } from './my-comp-597.component';

describe('MyComp597Component', () => {
  let component: MyComp597Component;
  let fixture: ComponentFixture<MyComp597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
