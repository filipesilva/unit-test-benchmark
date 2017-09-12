import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8087Component } from './my-comp-8087.component';

describe('MyComp8087Component', () => {
  let component: MyComp8087Component;
  let fixture: ComponentFixture<MyComp8087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
