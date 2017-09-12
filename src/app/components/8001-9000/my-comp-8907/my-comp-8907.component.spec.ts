import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8907Component } from './my-comp-8907.component';

describe('MyComp8907Component', () => {
  let component: MyComp8907Component;
  let fixture: ComponentFixture<MyComp8907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
