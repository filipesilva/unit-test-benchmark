import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5192Component } from './my-comp-5192.component';

describe('MyComp5192Component', () => {
  let component: MyComp5192Component;
  let fixture: ComponentFixture<MyComp5192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
