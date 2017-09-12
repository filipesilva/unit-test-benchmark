import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4782Component } from './my-comp-4782.component';

describe('MyComp4782Component', () => {
  let component: MyComp4782Component;
  let fixture: ComponentFixture<MyComp4782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
