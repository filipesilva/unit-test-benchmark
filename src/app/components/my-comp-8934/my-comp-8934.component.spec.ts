import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8934Component } from './my-comp-8934.component';

describe('MyComp8934Component', () => {
  let component: MyComp8934Component;
  let fixture: ComponentFixture<MyComp8934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
