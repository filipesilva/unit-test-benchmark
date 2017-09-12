import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8207Component } from './my-comp-8207.component';

describe('MyComp8207Component', () => {
  let component: MyComp8207Component;
  let fixture: ComponentFixture<MyComp8207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
