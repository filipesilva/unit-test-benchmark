import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5706Component } from './my-comp-5706.component';

describe('MyComp5706Component', () => {
  let component: MyComp5706Component;
  let fixture: ComponentFixture<MyComp5706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
