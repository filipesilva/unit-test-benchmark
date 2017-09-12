import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8576Component } from './my-comp-8576.component';

describe('MyComp8576Component', () => {
  let component: MyComp8576Component;
  let fixture: ComponentFixture<MyComp8576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
