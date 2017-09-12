import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4736Component } from './my-comp-4736.component';

describe('MyComp4736Component', () => {
  let component: MyComp4736Component;
  let fixture: ComponentFixture<MyComp4736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
