import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4871Component } from './my-comp-4871.component';

describe('MyComp4871Component', () => {
  let component: MyComp4871Component;
  let fixture: ComponentFixture<MyComp4871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
