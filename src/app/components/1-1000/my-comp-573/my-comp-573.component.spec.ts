import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp573Component } from './my-comp-573.component';

describe('MyComp573Component', () => {
  let component: MyComp573Component;
  let fixture: ComponentFixture<MyComp573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
