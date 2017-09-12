import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4594Component } from './my-comp-4594.component';

describe('MyComp4594Component', () => {
  let component: MyComp4594Component;
  let fixture: ComponentFixture<MyComp4594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
