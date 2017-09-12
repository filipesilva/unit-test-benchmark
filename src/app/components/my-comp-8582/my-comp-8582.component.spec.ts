import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8582Component } from './my-comp-8582.component';

describe('MyComp8582Component', () => {
  let component: MyComp8582Component;
  let fixture: ComponentFixture<MyComp8582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
