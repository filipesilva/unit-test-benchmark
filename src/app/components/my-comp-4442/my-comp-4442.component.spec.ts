import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4442Component } from './my-comp-4442.component';

describe('MyComp4442Component', () => {
  let component: MyComp4442Component;
  let fixture: ComponentFixture<MyComp4442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
