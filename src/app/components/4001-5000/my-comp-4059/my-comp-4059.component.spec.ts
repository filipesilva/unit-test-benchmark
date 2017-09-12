import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4059Component } from './my-comp-4059.component';

describe('MyComp4059Component', () => {
  let component: MyComp4059Component;
  let fixture: ComponentFixture<MyComp4059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
