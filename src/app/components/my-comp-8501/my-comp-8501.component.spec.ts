import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8501Component } from './my-comp-8501.component';

describe('MyComp8501Component', () => {
  let component: MyComp8501Component;
  let fixture: ComponentFixture<MyComp8501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
