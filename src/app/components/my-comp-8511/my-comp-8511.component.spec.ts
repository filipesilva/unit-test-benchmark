import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8511Component } from './my-comp-8511.component';

describe('MyComp8511Component', () => {
  let component: MyComp8511Component;
  let fixture: ComponentFixture<MyComp8511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
