import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8201Component } from './my-comp-8201.component';

describe('MyComp8201Component', () => {
  let component: MyComp8201Component;
  let fixture: ComponentFixture<MyComp8201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
