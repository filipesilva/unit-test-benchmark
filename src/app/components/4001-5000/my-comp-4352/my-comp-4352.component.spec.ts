import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4352Component } from './my-comp-4352.component';

describe('MyComp4352Component', () => {
  let component: MyComp4352Component;
  let fixture: ComponentFixture<MyComp4352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
