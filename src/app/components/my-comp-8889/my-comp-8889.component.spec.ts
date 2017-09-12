import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8889Component } from './my-comp-8889.component';

describe('MyComp8889Component', () => {
  let component: MyComp8889Component;
  let fixture: ComponentFixture<MyComp8889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
