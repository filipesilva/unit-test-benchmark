import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9484Component } from './my-comp-9484.component';

describe('MyComp9484Component', () => {
  let component: MyComp9484Component;
  let fixture: ComponentFixture<MyComp9484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
