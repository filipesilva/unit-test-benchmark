import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8250Component } from './my-comp-8250.component';

describe('MyComp8250Component', () => {
  let component: MyComp8250Component;
  let fixture: ComponentFixture<MyComp8250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
