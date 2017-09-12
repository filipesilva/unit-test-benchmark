import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8066Component } from './my-comp-8066.component';

describe('MyComp8066Component', () => {
  let component: MyComp8066Component;
  let fixture: ComponentFixture<MyComp8066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
