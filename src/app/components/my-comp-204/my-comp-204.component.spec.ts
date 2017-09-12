import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp204Component } from './my-comp-204.component';

describe('MyComp204Component', () => {
  let component: MyComp204Component;
  let fixture: ComponentFixture<MyComp204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
