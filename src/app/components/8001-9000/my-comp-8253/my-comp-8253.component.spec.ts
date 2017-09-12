import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8253Component } from './my-comp-8253.component';

describe('MyComp8253Component', () => {
  let component: MyComp8253Component;
  let fixture: ComponentFixture<MyComp8253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
