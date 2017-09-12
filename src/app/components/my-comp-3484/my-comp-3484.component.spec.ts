import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3484Component } from './my-comp-3484.component';

describe('MyComp3484Component', () => {
  let component: MyComp3484Component;
  let fixture: ComponentFixture<MyComp3484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
