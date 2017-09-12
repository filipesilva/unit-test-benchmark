import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1601Component } from './my-comp-1601.component';

describe('MyComp1601Component', () => {
  let component: MyComp1601Component;
  let fixture: ComponentFixture<MyComp1601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
