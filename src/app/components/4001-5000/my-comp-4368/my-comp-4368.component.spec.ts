import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4368Component } from './my-comp-4368.component';

describe('MyComp4368Component', () => {
  let component: MyComp4368Component;
  let fixture: ComponentFixture<MyComp4368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
