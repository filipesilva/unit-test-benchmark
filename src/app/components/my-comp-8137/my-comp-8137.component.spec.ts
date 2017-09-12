import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8137Component } from './my-comp-8137.component';

describe('MyComp8137Component', () => {
  let component: MyComp8137Component;
  let fixture: ComponentFixture<MyComp8137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
