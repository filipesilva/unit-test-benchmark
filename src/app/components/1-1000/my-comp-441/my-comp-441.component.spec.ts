import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp441Component } from './my-comp-441.component';

describe('MyComp441Component', () => {
  let component: MyComp441Component;
  let fixture: ComponentFixture<MyComp441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
