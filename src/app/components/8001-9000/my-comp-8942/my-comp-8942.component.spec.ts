import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8942Component } from './my-comp-8942.component';

describe('MyComp8942Component', () => {
  let component: MyComp8942Component;
  let fixture: ComponentFixture<MyComp8942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
