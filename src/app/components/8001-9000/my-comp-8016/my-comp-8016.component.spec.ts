import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8016Component } from './my-comp-8016.component';

describe('MyComp8016Component', () => {
  let component: MyComp8016Component;
  let fixture: ComponentFixture<MyComp8016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
