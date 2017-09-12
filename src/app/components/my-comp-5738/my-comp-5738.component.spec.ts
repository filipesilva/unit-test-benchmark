import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5738Component } from './my-comp-5738.component';

describe('MyComp5738Component', () => {
  let component: MyComp5738Component;
  let fixture: ComponentFixture<MyComp5738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
