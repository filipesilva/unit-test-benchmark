import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4237Component } from './my-comp-4237.component';

describe('MyComp4237Component', () => {
  let component: MyComp4237Component;
  let fixture: ComponentFixture<MyComp4237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
