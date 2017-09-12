import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8236Component } from './my-comp-8236.component';

describe('MyComp8236Component', () => {
  let component: MyComp8236Component;
  let fixture: ComponentFixture<MyComp8236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
