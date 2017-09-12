import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5870Component } from './my-comp-5870.component';

describe('MyComp5870Component', () => {
  let component: MyComp5870Component;
  let fixture: ComponentFixture<MyComp5870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
