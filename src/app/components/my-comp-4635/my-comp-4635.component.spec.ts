import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4635Component } from './my-comp-4635.component';

describe('MyComp4635Component', () => {
  let component: MyComp4635Component;
  let fixture: ComponentFixture<MyComp4635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
