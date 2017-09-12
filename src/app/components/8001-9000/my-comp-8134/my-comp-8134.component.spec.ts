import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8134Component } from './my-comp-8134.component';

describe('MyComp8134Component', () => {
  let component: MyComp8134Component;
  let fixture: ComponentFixture<MyComp8134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
