import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4270Component } from './my-comp-4270.component';

describe('MyComp4270Component', () => {
  let component: MyComp4270Component;
  let fixture: ComponentFixture<MyComp4270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
