import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8976Component } from './my-comp-8976.component';

describe('MyComp8976Component', () => {
  let component: MyComp8976Component;
  let fixture: ComponentFixture<MyComp8976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
