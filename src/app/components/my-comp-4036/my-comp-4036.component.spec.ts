import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4036Component } from './my-comp-4036.component';

describe('MyComp4036Component', () => {
  let component: MyComp4036Component;
  let fixture: ComponentFixture<MyComp4036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
