import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8281Component } from './my-comp-8281.component';

describe('MyComp8281Component', () => {
  let component: MyComp8281Component;
  let fixture: ComponentFixture<MyComp8281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
