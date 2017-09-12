import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9947Component } from './my-comp-9947.component';

describe('MyComp9947Component', () => {
  let component: MyComp9947Component;
  let fixture: ComponentFixture<MyComp9947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
