import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9321Component } from './my-comp-9321.component';

describe('MyComp9321Component', () => {
  let component: MyComp9321Component;
  let fixture: ComponentFixture<MyComp9321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
