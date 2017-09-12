import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4130Component } from './my-comp-4130.component';

describe('MyComp4130Component', () => {
  let component: MyComp4130Component;
  let fixture: ComponentFixture<MyComp4130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
