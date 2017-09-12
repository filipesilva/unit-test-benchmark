import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8764Component } from './my-comp-8764.component';

describe('MyComp8764Component', () => {
  let component: MyComp8764Component;
  let fixture: ComponentFixture<MyComp8764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
