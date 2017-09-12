import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8484Component } from './my-comp-8484.component';

describe('MyComp8484Component', () => {
  let component: MyComp8484Component;
  let fixture: ComponentFixture<MyComp8484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
