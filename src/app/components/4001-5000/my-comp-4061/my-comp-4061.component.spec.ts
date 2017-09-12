import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4061Component } from './my-comp-4061.component';

describe('MyComp4061Component', () => {
  let component: MyComp4061Component;
  let fixture: ComponentFixture<MyComp4061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
