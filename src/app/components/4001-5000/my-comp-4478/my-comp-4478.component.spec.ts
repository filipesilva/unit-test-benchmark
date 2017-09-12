import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4478Component } from './my-comp-4478.component';

describe('MyComp4478Component', () => {
  let component: MyComp4478Component;
  let fixture: ComponentFixture<MyComp4478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
