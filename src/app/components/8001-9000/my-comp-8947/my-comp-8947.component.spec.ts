import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8947Component } from './my-comp-8947.component';

describe('MyComp8947Component', () => {
  let component: MyComp8947Component;
  let fixture: ComponentFixture<MyComp8947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
