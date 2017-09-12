import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4746Component } from './my-comp-4746.component';

describe('MyComp4746Component', () => {
  let component: MyComp4746Component;
  let fixture: ComponentFixture<MyComp4746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
