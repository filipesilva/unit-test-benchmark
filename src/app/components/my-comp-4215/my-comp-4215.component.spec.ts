import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4215Component } from './my-comp-4215.component';

describe('MyComp4215Component', () => {
  let component: MyComp4215Component;
  let fixture: ComponentFixture<MyComp4215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
