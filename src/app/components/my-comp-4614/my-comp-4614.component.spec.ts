import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4614Component } from './my-comp-4614.component';

describe('MyComp4614Component', () => {
  let component: MyComp4614Component;
  let fixture: ComponentFixture<MyComp4614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
