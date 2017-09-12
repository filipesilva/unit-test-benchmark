import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8589Component } from './my-comp-8589.component';

describe('MyComp8589Component', () => {
  let component: MyComp8589Component;
  let fixture: ComponentFixture<MyComp8589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
