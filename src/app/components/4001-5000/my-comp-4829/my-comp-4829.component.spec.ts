import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4829Component } from './my-comp-4829.component';

describe('MyComp4829Component', () => {
  let component: MyComp4829Component;
  let fixture: ComponentFixture<MyComp4829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
