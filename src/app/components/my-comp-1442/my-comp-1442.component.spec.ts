import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1442Component } from './my-comp-1442.component';

describe('MyComp1442Component', () => {
  let component: MyComp1442Component;
  let fixture: ComponentFixture<MyComp1442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
