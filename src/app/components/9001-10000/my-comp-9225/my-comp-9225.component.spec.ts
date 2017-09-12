import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9225Component } from './my-comp-9225.component';

describe('MyComp9225Component', () => {
  let component: MyComp9225Component;
  let fixture: ComponentFixture<MyComp9225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
