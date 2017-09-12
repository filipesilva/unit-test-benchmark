import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7644Component } from './my-comp-7644.component';

describe('MyComp7644Component', () => {
  let component: MyComp7644Component;
  let fixture: ComponentFixture<MyComp7644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
