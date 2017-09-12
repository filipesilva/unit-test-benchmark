import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8240Component } from './my-comp-8240.component';

describe('MyComp8240Component', () => {
  let component: MyComp8240Component;
  let fixture: ComponentFixture<MyComp8240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
