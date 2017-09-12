import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4903Component } from './my-comp-4903.component';

describe('MyComp4903Component', () => {
  let component: MyComp4903Component;
  let fixture: ComponentFixture<MyComp4903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
