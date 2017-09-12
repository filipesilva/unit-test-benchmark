import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4569Component } from './my-comp-4569.component';

describe('MyComp4569Component', () => {
  let component: MyComp4569Component;
  let fixture: ComponentFixture<MyComp4569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
