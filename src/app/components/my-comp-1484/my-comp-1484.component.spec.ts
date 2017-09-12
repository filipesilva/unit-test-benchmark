import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1484Component } from './my-comp-1484.component';

describe('MyComp1484Component', () => {
  let component: MyComp1484Component;
  let fixture: ComponentFixture<MyComp1484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
