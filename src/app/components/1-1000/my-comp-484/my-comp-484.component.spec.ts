import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp484Component } from './my-comp-484.component';

describe('MyComp484Component', () => {
  let component: MyComp484Component;
  let fixture: ComponentFixture<MyComp484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
