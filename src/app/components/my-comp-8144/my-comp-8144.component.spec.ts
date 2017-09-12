import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8144Component } from './my-comp-8144.component';

describe('MyComp8144Component', () => {
  let component: MyComp8144Component;
  let fixture: ComponentFixture<MyComp8144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
