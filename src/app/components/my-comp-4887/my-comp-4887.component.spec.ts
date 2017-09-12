import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4887Component } from './my-comp-4887.component';

describe('MyComp4887Component', () => {
  let component: MyComp4887Component;
  let fixture: ComponentFixture<MyComp4887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
