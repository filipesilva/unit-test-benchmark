import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp776Component } from './my-comp-776.component';

describe('MyComp776Component', () => {
  let component: MyComp776Component;
  let fixture: ComponentFixture<MyComp776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
