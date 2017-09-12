import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9652Component } from './my-comp-9652.component';

describe('MyComp9652Component', () => {
  let component: MyComp9652Component;
  let fixture: ComponentFixture<MyComp9652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
