import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4656Component } from './my-comp-4656.component';

describe('MyComp4656Component', () => {
  let component: MyComp4656Component;
  let fixture: ComponentFixture<MyComp4656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
