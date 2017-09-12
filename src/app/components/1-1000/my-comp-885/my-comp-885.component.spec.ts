import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp885Component } from './my-comp-885.component';

describe('MyComp885Component', () => {
  let component: MyComp885Component;
  let fixture: ComponentFixture<MyComp885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
