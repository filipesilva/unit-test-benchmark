import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8421Component } from './my-comp-8421.component';

describe('MyComp8421Component', () => {
  let component: MyComp8421Component;
  let fixture: ComponentFixture<MyComp8421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
