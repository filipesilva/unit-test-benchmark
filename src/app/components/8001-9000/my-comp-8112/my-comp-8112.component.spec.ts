import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8112Component } from './my-comp-8112.component';

describe('MyComp8112Component', () => {
  let component: MyComp8112Component;
  let fixture: ComponentFixture<MyComp8112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
