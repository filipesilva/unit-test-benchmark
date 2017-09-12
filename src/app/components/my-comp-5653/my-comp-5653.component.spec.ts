import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5653Component } from './my-comp-5653.component';

describe('MyComp5653Component', () => {
  let component: MyComp5653Component;
  let fixture: ComponentFixture<MyComp5653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
