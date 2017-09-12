import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8364Component } from './my-comp-8364.component';

describe('MyComp8364Component', () => {
  let component: MyComp8364Component;
  let fixture: ComponentFixture<MyComp8364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
