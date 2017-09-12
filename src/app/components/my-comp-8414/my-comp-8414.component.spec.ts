import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8414Component } from './my-comp-8414.component';

describe('MyComp8414Component', () => {
  let component: MyComp8414Component;
  let fixture: ComponentFixture<MyComp8414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
