import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4255Component } from './my-comp-4255.component';

describe('MyComp4255Component', () => {
  let component: MyComp4255Component;
  let fixture: ComponentFixture<MyComp4255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
