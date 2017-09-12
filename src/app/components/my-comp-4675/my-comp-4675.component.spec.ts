import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4675Component } from './my-comp-4675.component';

describe('MyComp4675Component', () => {
  let component: MyComp4675Component;
  let fixture: ComponentFixture<MyComp4675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
