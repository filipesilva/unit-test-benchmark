import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2484Component } from './my-comp-2484.component';

describe('MyComp2484Component', () => {
  let component: MyComp2484Component;
  let fixture: ComponentFixture<MyComp2484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
