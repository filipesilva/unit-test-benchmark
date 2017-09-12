import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8475Component } from './my-comp-8475.component';

describe('MyComp8475Component', () => {
  let component: MyComp8475Component;
  let fixture: ComponentFixture<MyComp8475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
