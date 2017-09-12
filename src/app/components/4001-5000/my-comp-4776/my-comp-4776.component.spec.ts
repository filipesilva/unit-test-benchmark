import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4776Component } from './my-comp-4776.component';

describe('MyComp4776Component', () => {
  let component: MyComp4776Component;
  let fixture: ComponentFixture<MyComp4776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
