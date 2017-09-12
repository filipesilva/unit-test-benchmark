import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8916Component } from './my-comp-8916.component';

describe('MyComp8916Component', () => {
  let component: MyComp8916Component;
  let fixture: ComponentFixture<MyComp8916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
