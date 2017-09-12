import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4484Component } from './my-comp-4484.component';

describe('MyComp4484Component', () => {
  let component: MyComp4484Component;
  let fixture: ComponentFixture<MyComp4484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
