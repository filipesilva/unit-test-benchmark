import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4688Component } from './my-comp-4688.component';

describe('MyComp4688Component', () => {
  let component: MyComp4688Component;
  let fixture: ComponentFixture<MyComp4688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
