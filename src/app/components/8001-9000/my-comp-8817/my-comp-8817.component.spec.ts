import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8817Component } from './my-comp-8817.component';

describe('MyComp8817Component', () => {
  let component: MyComp8817Component;
  let fixture: ComponentFixture<MyComp8817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
