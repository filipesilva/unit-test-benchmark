import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8404Component } from './my-comp-8404.component';

describe('MyComp8404Component', () => {
  let component: MyComp8404Component;
  let fixture: ComponentFixture<MyComp8404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
