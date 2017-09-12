import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8622Component } from './my-comp-8622.component';

describe('MyComp8622Component', () => {
  let component: MyComp8622Component;
  let fixture: ComponentFixture<MyComp8622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
