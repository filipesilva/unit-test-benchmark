import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8035Component } from './my-comp-8035.component';

describe('MyComp8035Component', () => {
  let component: MyComp8035Component;
  let fixture: ComponentFixture<MyComp8035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
