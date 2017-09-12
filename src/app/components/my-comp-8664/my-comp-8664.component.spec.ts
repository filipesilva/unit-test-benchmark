import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8664Component } from './my-comp-8664.component';

describe('MyComp8664Component', () => {
  let component: MyComp8664Component;
  let fixture: ComponentFixture<MyComp8664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
