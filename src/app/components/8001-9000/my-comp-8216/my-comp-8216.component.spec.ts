import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8216Component } from './my-comp-8216.component';

describe('MyComp8216Component', () => {
  let component: MyComp8216Component;
  let fixture: ComponentFixture<MyComp8216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
