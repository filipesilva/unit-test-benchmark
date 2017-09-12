import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8428Component } from './my-comp-8428.component';

describe('MyComp8428Component', () => {
  let component: MyComp8428Component;
  let fixture: ComponentFixture<MyComp8428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
