import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4496Component } from './my-comp-4496.component';

describe('MyComp4496Component', () => {
  let component: MyComp4496Component;
  let fixture: ComponentFixture<MyComp4496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
