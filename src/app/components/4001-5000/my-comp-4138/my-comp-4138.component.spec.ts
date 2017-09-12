import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4138Component } from './my-comp-4138.component';

describe('MyComp4138Component', () => {
  let component: MyComp4138Component;
  let fixture: ComponentFixture<MyComp4138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
