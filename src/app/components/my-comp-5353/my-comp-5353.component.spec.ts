import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5353Component } from './my-comp-5353.component';

describe('MyComp5353Component', () => {
  let component: MyComp5353Component;
  let fixture: ComponentFixture<MyComp5353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
