import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7442Component } from './my-comp-7442.component';

describe('MyComp7442Component', () => {
  let component: MyComp7442Component;
  let fixture: ComponentFixture<MyComp7442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
