import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5467Component } from './my-comp-5467.component';

describe('MyComp5467Component', () => {
  let component: MyComp5467Component;
  let fixture: ComponentFixture<MyComp5467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
