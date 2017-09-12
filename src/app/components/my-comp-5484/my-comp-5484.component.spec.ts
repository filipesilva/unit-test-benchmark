import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5484Component } from './my-comp-5484.component';

describe('MyComp5484Component', () => {
  let component: MyComp5484Component;
  let fixture: ComponentFixture<MyComp5484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
