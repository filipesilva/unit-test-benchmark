import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5966Component } from './my-comp-5966.component';

describe('MyComp5966Component', () => {
  let component: MyComp5966Component;
  let fixture: ComponentFixture<MyComp5966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
