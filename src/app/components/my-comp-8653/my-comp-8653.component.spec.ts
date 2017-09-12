import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8653Component } from './my-comp-8653.component';

describe('MyComp8653Component', () => {
  let component: MyComp8653Component;
  let fixture: ComponentFixture<MyComp8653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
