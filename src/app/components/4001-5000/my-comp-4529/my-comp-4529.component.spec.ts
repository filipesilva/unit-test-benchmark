import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4529Component } from './my-comp-4529.component';

describe('MyComp4529Component', () => {
  let component: MyComp4529Component;
  let fixture: ComponentFixture<MyComp4529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
