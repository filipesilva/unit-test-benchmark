import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6484Component } from './my-comp-6484.component';

describe('MyComp6484Component', () => {
  let component: MyComp6484Component;
  let fixture: ComponentFixture<MyComp6484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
