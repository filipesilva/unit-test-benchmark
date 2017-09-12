import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp653Component } from './my-comp-653.component';

describe('MyComp653Component', () => {
  let component: MyComp653Component;
  let fixture: ComponentFixture<MyComp653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
