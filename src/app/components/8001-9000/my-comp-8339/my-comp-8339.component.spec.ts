import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8339Component } from './my-comp-8339.component';

describe('MyComp8339Component', () => {
  let component: MyComp8339Component;
  let fixture: ComponentFixture<MyComp8339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
