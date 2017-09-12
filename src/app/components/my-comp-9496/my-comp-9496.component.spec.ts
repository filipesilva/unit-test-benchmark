import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9496Component } from './my-comp-9496.component';

describe('MyComp9496Component', () => {
  let component: MyComp9496Component;
  let fixture: ComponentFixture<MyComp9496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
