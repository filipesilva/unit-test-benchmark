import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4666Component } from './my-comp-4666.component';

describe('MyComp4666Component', () => {
  let component: MyComp4666Component;
  let fixture: ComponentFixture<MyComp4666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
