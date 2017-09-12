import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8467Component } from './my-comp-8467.component';

describe('MyComp8467Component', () => {
  let component: MyComp8467Component;
  let fixture: ComponentFixture<MyComp8467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
