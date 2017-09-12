import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4472Component } from './my-comp-4472.component';

describe('MyComp4472Component', () => {
  let component: MyComp4472Component;
  let fixture: ComponentFixture<MyComp4472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
