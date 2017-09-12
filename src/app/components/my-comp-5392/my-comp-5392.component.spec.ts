import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5392Component } from './my-comp-5392.component';

describe('MyComp5392Component', () => {
  let component: MyComp5392Component;
  let fixture: ComponentFixture<MyComp5392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
