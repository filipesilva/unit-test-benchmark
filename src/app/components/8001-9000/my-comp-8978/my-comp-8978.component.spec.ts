import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8978Component } from './my-comp-8978.component';

describe('MyComp8978Component', () => {
  let component: MyComp8978Component;
  let fixture: ComponentFixture<MyComp8978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
