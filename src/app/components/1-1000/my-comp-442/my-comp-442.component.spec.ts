import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp442Component } from './my-comp-442.component';

describe('MyComp442Component', () => {
  let component: MyComp442Component;
  let fixture: ComponentFixture<MyComp442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
