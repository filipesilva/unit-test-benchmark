import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5469Component } from './my-comp-5469.component';

describe('MyComp5469Component', () => {
  let component: MyComp5469Component;
  let fixture: ComponentFixture<MyComp5469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
