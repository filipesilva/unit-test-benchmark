import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8860Component } from './my-comp-8860.component';

describe('MyComp8860Component', () => {
  let component: MyComp8860Component;
  let fixture: ComponentFixture<MyComp8860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
