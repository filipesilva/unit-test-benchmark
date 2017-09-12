import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5649Component } from './my-comp-5649.component';

describe('MyComp5649Component', () => {
  let component: MyComp5649Component;
  let fixture: ComponentFixture<MyComp5649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
