import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8408Component } from './my-comp-8408.component';

describe('MyComp8408Component', () => {
  let component: MyComp8408Component;
  let fixture: ComponentFixture<MyComp8408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
