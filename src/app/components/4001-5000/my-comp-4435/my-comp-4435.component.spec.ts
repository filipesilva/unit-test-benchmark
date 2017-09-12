import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4435Component } from './my-comp-4435.component';

describe('MyComp4435Component', () => {
  let component: MyComp4435Component;
  let fixture: ComponentFixture<MyComp4435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
