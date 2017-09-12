import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5204Component } from './my-comp-5204.component';

describe('MyComp5204Component', () => {
  let component: MyComp5204Component;
  let fixture: ComponentFixture<MyComp5204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
