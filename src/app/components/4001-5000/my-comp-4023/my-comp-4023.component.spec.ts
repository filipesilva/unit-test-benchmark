import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4023Component } from './my-comp-4023.component';

describe('MyComp4023Component', () => {
  let component: MyComp4023Component;
  let fixture: ComponentFixture<MyComp4023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
