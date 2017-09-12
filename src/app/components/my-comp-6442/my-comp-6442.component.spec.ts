import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6442Component } from './my-comp-6442.component';

describe('MyComp6442Component', () => {
  let component: MyComp6442Component;
  let fixture: ComponentFixture<MyComp6442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
