import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8781Component } from './my-comp-8781.component';

describe('MyComp8781Component', () => {
  let component: MyComp8781Component;
  let fixture: ComponentFixture<MyComp8781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
