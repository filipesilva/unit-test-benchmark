import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5396Component } from './my-comp-5396.component';

describe('MyComp5396Component', () => {
  let component: MyComp5396Component;
  let fixture: ComponentFixture<MyComp5396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
