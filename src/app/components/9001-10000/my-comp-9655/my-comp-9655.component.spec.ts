import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9655Component } from './my-comp-9655.component';

describe('MyComp9655Component', () => {
  let component: MyComp9655Component;
  let fixture: ComponentFixture<MyComp9655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
