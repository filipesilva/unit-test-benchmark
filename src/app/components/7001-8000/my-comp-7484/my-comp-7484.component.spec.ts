import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7484Component } from './my-comp-7484.component';

describe('MyComp7484Component', () => {
  let component: MyComp7484Component;
  let fixture: ComponentFixture<MyComp7484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
