import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp665Component } from './my-comp-665.component';

describe('MyComp665Component', () => {
  let component: MyComp665Component;
  let fixture: ComponentFixture<MyComp665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
