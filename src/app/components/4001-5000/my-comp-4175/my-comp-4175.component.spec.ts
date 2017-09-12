import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4175Component } from './my-comp-4175.component';

describe('MyComp4175Component', () => {
  let component: MyComp4175Component;
  let fixture: ComponentFixture<MyComp4175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
