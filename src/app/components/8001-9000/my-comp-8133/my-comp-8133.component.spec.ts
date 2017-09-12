import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8133Component } from './my-comp-8133.component';

describe('MyComp8133Component', () => {
  let component: MyComp8133Component;
  let fixture: ComponentFixture<MyComp8133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
