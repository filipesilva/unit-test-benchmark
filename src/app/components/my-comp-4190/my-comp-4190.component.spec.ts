import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4190Component } from './my-comp-4190.component';

describe('MyComp4190Component', () => {
  let component: MyComp4190Component;
  let fixture: ComponentFixture<MyComp4190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
